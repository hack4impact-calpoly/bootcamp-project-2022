import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import RecipePage from './components/RecipePage';
import { Recipe } from './recipeData';

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/recipe')
      .then((response) => response.json())
      .then((recipeData) => setRecipes(recipeData))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<About />} />
          <Route
            path="/recipes/:name"
            element={<RecipePage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
