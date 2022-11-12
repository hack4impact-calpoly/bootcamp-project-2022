import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import recipes from './recipeData';
import RecipePreview from './components/recipePreview';

function App() {
  return (
    <body>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {recipes.map((recipe) => (
              /* lowercase name and replace space using global search with "-" */
              <Route path={`/recipes/${recipe.name.toLowerCase().replace(/\s/g, "-")}`}
                element={<RecipePreview {...recipe} />} />
            )
            )}
        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;
