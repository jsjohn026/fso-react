const Country = ({ country, weather }) => {
  const city = country.capital[0]

  return (
    <div key={country.name.common} >
        <h2>{country.name.common}</h2>
          <div>Capital {city}</div>
          <div>Area {country.area}</div>
        <h3>Languages</h3>
        <ul>
          {Object.values(country.languages).map(language => 
            <li key={language}>{language}</li>
          )}
        </ul>
        <img src={country.flags.png} alt={country.flags.alt} />
        <div>
          <h3>Weather in {city}</h3>
          <p>Temperature {weather.main.temp} Celsius</p>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
          <p>Wind {weather.wind.speed} m/s</p>
        </div>
      </div>
  )
}

export default Country