const Country = ({ country }) => {
  return (
    <div key={country.name.common} >
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
  )
}

export default Country