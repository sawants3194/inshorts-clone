import React, { useEffect, useState } from 'react'
import { Dimmer, Loader } from 'semantic-ui-react';
import { WEATHER_API } from '../../ApiKey';
import Menu from '../../Menu';
import WeatherApp from './WeatherApp/WeatherApp';

const Weather = () => {
  // console.log(process.env);
  // console.log(WEATHER_API);
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function (position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        }); 
  
        await fetch(
          `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${WEATHER_API}`
        )
          .then((res) => res.json())
          .then((result) => {
            setData(result);
            console.log(result);
          });
      };
      fetchData();
    }, [lat, long]);
  
    return (
      <div className="App">
        <Menu/>
        {typeof data.main != "undefined" ? (
          <WeatherApp weatherData={data} />
        ) : (
          <div>
            <Dimmer active>
              <Loader>Loading..</Loader>
            </Dimmer>
         </div>
        )}
      </div>
    );
}

export default Weather
