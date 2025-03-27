import { useState, useEffect } from "react"
import personService from "./services/persons"
import Person from "./components/Person"
import PersonForm from "./components/PersonForm"
import Filter from "./components/Filter"

const Persons = ({ personsToShow, removePerson }) => {
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

  const filteredPersons = searchLetters.length > 0 
    ? persons.filter(person => person.name.toLowerCase().substring(0, searchLetters.length) === searchLetters)
    : persons

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

  const removePerson = id => {
    const person = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService
        .remove(id)
        .then(() => {
          console.log(`${person.name} has been removed from the phone book`)
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error => {
          console.error('Failed to remove person', error);
        })
    }
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
      <Persons 
        personsToShow={filteredPersons} 
        removePerson={removePerson} 
      />
    </div>
  )
}

export default App