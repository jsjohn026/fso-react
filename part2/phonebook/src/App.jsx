import { useState, useEffect } from "react"
import personService from "./services/persons"
import Person from "./components/Person"
import PersonForm from "./components/PersonForm"
import Filter from "./components/Filter"


const Persons = ({ personsToShow, handleRemoval }) => {
  
  const removePerson = id => {
    const person = personsToShow.find(person => person.id === id)

    personService
      .remove(id)
      .then(() => {
        console.log(`${person.name} has been removed from the phone book`)
        handleRemoval(id)
      })
      .catch(error => {
        console.error('Failed to remove person', error);
      })

  }

  return (
    <div>
    {personsToShow.map((person) => 
      <Person 
        key={person.id} 
        person={person} 
        removePerson={() => removePerson(person.id)}
    />)}
  </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchLetters, setSearchLetters] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (e) => {
    e.preventDefault()
    if (persons.find(person => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {

      const personObject = {
        name: newName,
        number: newNumber,
      }

      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
        .catch(error => {
          console.log('Failed to remove person: ', error);
        })
    }

    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleSearchChange = (e) => {
    setSearchLetters(e.target.value.toLowerCase())
  }

  const handleRemoval = (id) => {
    setPersons(persons.filter(person => person.id !== id))
  }

  const personsToShow = searchLetters.length > 0 ? 
    persons.filter(person => person.name.toLowerCase().substring(0, searchLetters.length) === searchLetters)
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        searchLetters={searchLetters} 
        handleSearchChange={handleSearchChange} 
      />
      <h3>add a new</h3>
      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} handleRemoval={handleRemoval} />
    </div>
  )
}

export default App