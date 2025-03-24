import { useState, useEffect } from "react"
import axios from "axios"
import Person from "./components/Person"
import PersonForm from "./components/PersonForm"
import Filter from "./components/Filter"

const Persons = ({ personsToShow }) => {
  return (
    <div>
    {personsToShow.map((person) => <Person key={person.id} person={person} />)}
  </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchLetters, setSearchLetters] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const addPerson = (e) => {
    e.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    
    persons.find(el => el.name === newName) ? window.alert(`${newName} is already added to phonebook`) : setPersons(persons.concat(personObject))
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
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App