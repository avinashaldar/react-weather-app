import axios from 'axios';
import React, { useState } from 'react'

const Weather = () => {
    const [city, setCity] = useState();
    const [weather, setWeather] = useState();
    const handleCityChange = (event) => {
        setCity(event.target.value)
    }
    console.log(weather)
    const fetchWeather = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'e769a235948a9e3a7d2070d96212ebe3'}`);
            setWeather(response);
        } catch (error) {
            console.log("Error Fetching Weather Data", error);
        }
    }

    const handleClick = () => {
        fetchWeather();
    }
    return (
        <>
            <div className='weather-container'>
                <input type='text' placeholder='Enter City Name' value={city} onChange={handleCityChange} />
                <button onClick={handleClick}>Get Weather</button>
                {weather && <>
                    <div className='weather-info'>
                        <h3>
                            {weather.data.name}
                            <p>Temp is {weather.data.main.temp} Kelvin</p>
                            {weather.data.weather[0].description}
                            <p>Humidity: {weather.data.main.humidity}</p>

                        </h3>
                    </div>
                </>}
                <p>Made by @Avinash Aldar</p>
            </div>
        </>
    )
}

export default Weather
