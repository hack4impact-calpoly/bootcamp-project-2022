import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import recipes from './recipeData';
import Recipe from './components/recipe';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* home page */}
        <Route path="/" element={<Home />} />
        {/* about page */}
        <Route path="/about" element={<About />} />
        {/* recipe pages */}
        {recipes.map((recipe) => (
          // convert the recipe name to a url-friendly string
          <Route
            path={`/recipes/${recipe.name.toLowerCase().replace(/\s/g, "-")}`}
            element={<Recipe {...recipe}/>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;



