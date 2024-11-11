import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes as well
import NewsApp from './core/NewsApp/NewsApp';
import Weather from './core/WeatherApp/Weather';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes> {/* Wrap routes inside the Routes component */}
        <Route path="/" element={<NewsApp />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
}; 

export default AppRoutes;
