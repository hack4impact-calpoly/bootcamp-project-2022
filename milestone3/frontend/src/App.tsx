import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipePreview from './components/RecipePreview';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import RecipePage from './components/RecipePage';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path ="/about" element = {<About/>}/>
      <Route path = "/recipe/:name" element = {<RecipePage/>}/>
      <Route path = "/external/:name/" element = {<RecipePage external/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
