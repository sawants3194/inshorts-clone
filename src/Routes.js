import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; // Import Routes as well
import NewsApp from './core/NewsApp/NewsApp';
import Weather from './core/WeatherApp/Weather';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch> {/* Wrap routes inside the Routes component */}
        <Route path="/" component={NewsApp} />
        <Route path="/weather" component={Weather} />
      </Switch>
    </BrowserRouter>
  );
}; 

export default AppRoutes;
