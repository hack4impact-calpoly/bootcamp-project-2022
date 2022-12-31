import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import Navbar from "./components/Navbar";
import About from './components/About';
import Home from './components/Home';
import RecipePage from './components/recipePage';
import recipes, {Recipe} from './recipeData';
import './App.css';

function App() {
  console.log(recipes)
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/about" element = {<About/>} />
        <Route path = "/recipe/:id" element = {<RecipePage recipeProps = {recipes}/>}/>
        <Route path = "externalRecipe/:id" element = {<RecipePage recipeProps = {recipes} external/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
