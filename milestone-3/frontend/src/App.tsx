import React, {useRef, useEffect, useState} from 'react';
import './App.css';
import Home from './components/home';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import RecipePage from './components/RecipePage';
import { recipeObj } from './recipeData';
import NoMatch from './components/NoMatch';
import About from './components/About';



function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>} />
        <Route path="recipes/:id" element={<RecipePage recipes={recipeObj} />} />
        <Route path='/*' element={<NoMatch />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
