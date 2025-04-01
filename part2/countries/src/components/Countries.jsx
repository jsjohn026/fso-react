const Countries = ({ countries }) => {
  let countryList;

  if (countries.length === 0) {
    countryList = <div></div>
  } else if(countries.length === 1) {
    countries.map(country => {
      countryList =
      <div>
        <h2>{country.name.common}</h2>
          <div>Capital {country.capital[0]}</div>
          <div>Area {country.area}</div>
        <h3>Languages</h3>
        <ul>
          {Object.values(country.languages).map(language => 
            <li key={language}>{language}</li>
          )}
        </ul>
        <img src={country.flags.png} alt={country.flags.alt} />
      </div>
    })
  } else if(countries.length < 11) {
    countryList = countries.map(country => 
      <div key={country.name.common}>{country.name.common}</div>
    )
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