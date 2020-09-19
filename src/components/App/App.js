import React from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../Home/Home';
import NasaPhoto from '../NasaPhoto/NasaPhoto';
import SolarSystem from '../SolarSystem/SolarSystem';

class App extends React.Component {


  render() {
    return (
      
      <BrowserRouter>
        <Route component={Home} path="/" exact />
        <Route component={NasaPhoto} path="/nasaphoto" />
        <Route component={SolarSystem} path="/solarsystem" />
      </BrowserRouter>

    )
  }
}

export default App;
