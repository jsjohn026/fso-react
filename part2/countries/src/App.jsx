import { useState, useEffect } from 'react'
import countriesService from './services/countries'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [searchLetters, setSearchLetters] = useState('')
  const [countries, setCountries] = useState([])
  const [expandedCountries, setExpandedCountries] = useState([])

  useEffect(() => {
    countriesService
      .getAll()
      .then(countries => {
        setCountries(countries)
      })
  }, [searchLetters])

  const filteredCountries = searchLetters.length > 0
    ? countries.filter(country => 
      country.name.common
      .toLowerCase()
      .substring(0, searchLetters.length) === searchLetters)
    : []

  const toggleCountryView = (country) => {
    setExpandedCountries(prev => 
      prev.some(c => c.name.common === country.name.common) 
        ? prev.filter(c => c.name.common !== country.name.common)
        : [...prev, country]
    )
  }

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
      <Countries 
        countries={filteredCountries} 
        expandedCountries={expandedCountries} 
        toggleCountryView={toggleCountryView} 
      />
    </div>
  )
}

export default App
