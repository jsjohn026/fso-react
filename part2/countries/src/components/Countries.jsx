import Country from './Country'

const Countries = ({ countries, expandedCountries, toggleCountryView }) => {
  let countryList
  
  if (countries.length === 0) {
    countryList = <div></div>
  } else if(countries.length === 1) {
    countries.map(country => {countryList = <Country country={country} />})
  } else if(countries.length < 11) {
    countryList = countries.map(country => (
      <div key={country.name.common}>
        {expandedCountries.some(c => c?.name?.common === country.name.common) 
          ? <Country country={country} />
          : <span>{country.name.common} </span>}
        <button onClick={() => {
          toggleCountryView(country)
          }}>
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