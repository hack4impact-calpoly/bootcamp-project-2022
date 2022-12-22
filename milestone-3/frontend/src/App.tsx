import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/navbar";
import About from "./components/About";
import RecipePage from "./components/RecipePage"
import Recipe1 from './components/Recipe1';
import { Recipe } from './Recipedata';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path = "recipe/:id" element = {<RecipePage />} />
      <Route path="externalRecipe/:id" element={<RecipePage external />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
