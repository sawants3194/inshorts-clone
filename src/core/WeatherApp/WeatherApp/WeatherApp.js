import React from "react";
import "./weather.css";
import { Button } from 'semantic-ui-react';
import dayjs from "dayjs"
import { Container } from "@material-ui/core";

const refresh = () => {
  window.location.reload();
}
const WeatherApp = ({ weatherData }) => {
  return (
    <Container maxWidth="md" >
      <div className="main">

<div className="top">
  <p className="header">{weatherData.name}</p>
  <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
</div>
<div className="flex">
  <p className="day">{dayjs().format('dddd')}, <span>{dayjs().format('LL')}</span></p>
  <p className="description">{weatherData.weather[0].main}</p>
</div>

<div className="flex">
  <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
  <p className="temp">Humidity: {weatherData.main.humidity} %</p>
</div>

<div className="flex">
  <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
  <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
</div>

</div>
    </Container>
  );
};

export default WeatherApp;
