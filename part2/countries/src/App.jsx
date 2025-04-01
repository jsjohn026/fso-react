import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [searchLetters, setSearchLetters] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => response.data)
      .then(countries => {
        setCountries(countries)
      })
  }, [searchLetters])

  const filteredCountries = searchLetters.length > 0
    ? countries.filter(country => country.name.common.toLowerCase().substring(0, searchLetters.length) === searchLetters)
    : []

  const handleSearchChange = (e) => {
    setSearchLetters(e.target.value.toLowerCase())
  }

  return (
    <div>
      <h1>Countries!</h1>
      <Filter
        searchLetters={searchLetters}
        handleSearchChange={handleSearchChange}
      />
      <Countries countries={filteredCountries} />
    </div>
  )
}

export default App
