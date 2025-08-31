import { useState, useEffect} from 'react';
import weatherService from '../services/weather';

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching weather for', capital);
    setLoading(true); 
    setError(null);

    weatherService
      .getWeather(capital)
      .then(weatherData => {
        console.log('Weather data received:', weatherData);
        setWeather(weatherData);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching weather data:', err);
        setError('Failed to fetch weather data');
        setLoading(false);
      });
  }, [capital]);    

  if (loading) {
    return <div>Loading weather data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weather) {
    return <div>No weather data available</div>;
  }

  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return(
    <div>
      <h3>Weather in {capital}</h3>
      <div>
        <p>Temperature {weather.main.temp}°C</p>
        <p>Description {weather.weather[0].description}</p>
        <p>Wind {weather.wind.speed} m/s</p>
        <div>
          <img 
            src={iconUrl} 
            alt={weather.weather[0].description}
            width="100"
          />
        </div>
      </div>
    </div>
  )
}

export default Weather;