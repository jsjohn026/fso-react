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

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className='message'>
      {message}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchLetters, setSearchLetters] = useState('')
  const [message, setMessage] = useState(null)

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
    
    const personObject = {
      name: newName,
      number: newNumber,
    }

    const existingPerson = persons.find(person => person.name === newName)

    if (existingPerson) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personService
          .update(existingPerson.id, { ...personObject})
          .then(updatedPerson => {
            setMessage(`Added ${updatedPerson.name}`)
            setTimeout(() => {
              setMessage(null)
            }, 5000)
            setPersons(persons.map(person => person.id !== updatedPerson.id ? person : updatedPerson))
          })
          .catch(error => {
            console.log('Failed to update person: ', error);
          })
      }
    } else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setMessage(`Added ${returnedPerson.name}`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
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
      <Notification message={message} />
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