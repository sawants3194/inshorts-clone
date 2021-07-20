import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NewsApp from './core/NewsApp/NewsApp'
import Weather from './core/WeatherApp/Weather'




const Routes = () => {
    return (
        <BrowserRouter>
    <Switch>
        <Route path='/' exact  component={NewsApp} ></Route>
        {/* <Route path='/weather' exact component={Weather} ></Route> */}
        

    </Switch>
    </BrowserRouter>
    )
}

export default Routes
