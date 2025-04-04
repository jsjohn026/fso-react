import axios from 'axios'
const WEATHER_API_KEY= import.meta.env.VITE_WEATHER_API_KEY

const fetchWeather = (city) => {
  const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`)
  return request.then(response => response.data)
}

const fetchIcon = () => {
  const request = axios.get(`https://openweathermap.org/img/wn/${icon}@2x.png`)
  return request.then(response => response.data)
}

export default { fetchWeather }