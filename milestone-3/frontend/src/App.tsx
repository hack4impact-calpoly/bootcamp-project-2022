import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
import Navbar from "./components/navbar";
import About from "./components/About";
import Home from './components/Home';
import recipes from './recipeData';
import RecipePreview from './components/recipePreview';
import RecipePage from './components/recipePage';

function App(){
  return (
    // <Navbar />
    // <About />
    // <Home />
    // <RecipePage />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe/:name" element={<RecipePage />} />
        <Route path="externalRecipe/:name" element={<RecipePage external />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;