import { useState } from 'react'
import Country from './Country'
import countryServices from '../services/country'

const Countries = ({ countries, expandedCountries, toggleCountryView }) => {
  const [weatherData, setWeatherData] = useState({})

  const getWeather = async (country, city) => {
    
    await countryServices
      .fetchWeather(city)
      .then(returnedWeather => setWeatherData(returnedWeather))

    toggleCountryView(country)
  }

  let countryList
  
  if (countries.length === 0) {
    countryList = <div></div>
  } else if(countries.length === 1) {
    countries.map(country => {countryList = <Country country={country} weather={weatherData}/>})
  } else if(countries.length < 11) {
    countryList = countries.map(country => (
      <div key={country.name.common}>
        {expandedCountries.some(c => c?.name?.common === country.name.common) 
          ? <Country country={country} weather={weatherData} />
          : <span>{country.name.common} </span>}
        <button onClick={() => {getWeather(country, country.capital[0])}}>
          {expandedCountries.some(c => c?.name?.common === country.name.common) ? 'Hide' : 'Show'}
        </button>
      </div>
    ))
  } else if(countries.length > 10) {
    countryList = <div>Too many matches, specify another filter</div>
  }

  return (
    <div>
      {countryList}
    </div>
  )
}

export default Countries