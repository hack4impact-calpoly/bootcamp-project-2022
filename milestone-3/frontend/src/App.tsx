import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import RecipePage from './components/RecipePage'
import recipes, { Recipe } from "./components/recipeData";

// milestone 3-3.5
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
				{recipes.map((recipe) => (
          <Route
            path={`/recipe/:name`}
            element={<RecipePage {...recipe} />}
          />
        ))}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
