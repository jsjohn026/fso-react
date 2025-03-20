import { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addPerson = (e) => {
    e.preventDefault()
    const personObject = {
      name: newName
    }

    persons.find(el => personObject) ? window.alert(`${newName} is already added to phonebook`) : setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebooks</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => <div key={person.name}>{person.name}</div> )}
      </div>
    </div>
  )
}

export default App