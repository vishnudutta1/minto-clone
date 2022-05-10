import { useState, useEffect } from 'react';

import axios from "axios"

import './App.css';
import Product from './components/Product';
import Navbar from './components/Navbar';

import JustBelowNav from './components/JustBelowNav';

//import Card1 from './components/Card1'
//import JustBelowNav from './components/JustBelowNav';

function App() {

  return (
    <div className="App">
    
  
    <Navbar/>
     <JustBelowNav/>
    <Product/> 
    <paragraph_temp/>
  
    

    

    </div>
  );
}

export default App;
