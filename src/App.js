import React from "react";
import Header from './components/Header'; 
import Clients from './components/Clients'; 
import About from './components/About'
import Prices from './components/Prices'; 
import Shop from './components/Shop'; 
import Menu from './components/Menu'
import {Router} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Clients/>
      <Prices/>
      <Shop/>
      <Menu/>
    </div>
  );
}

export default App;

