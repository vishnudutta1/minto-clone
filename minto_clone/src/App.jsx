import { useState, useEffect } from 'react';

import axios from "axios"

import './App.css';
import Product from './components/Product';
import Navbar from './components/Navbar';

import JustBelowNav from './components/JustBelowNav';

import { Route, Routes } from "react-router-dom";
import Individual_page from './components/Individual_page';


//import Card1 from './components/Card1'
//import JustBelowNav from './components/JustBelowNav';

function App() {

  return (
    <div className="App">
    
  
     <Navbar/>
     <JustBelowNav/>
    <Product/> 
    <paragraph_temp/> 

  
    <Routes>
        

        <Route path={"/products"} element={<Product />} />

        <Route path={"/products/:id"} element={<Individual_page />} />
      
      </Routes>

    

    

    </div>
  );
}

export default App;
