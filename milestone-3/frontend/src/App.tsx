import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import recipes from './recipeData';
import RecipePage from './components/RecipePage';

function App() {
  return (
    <body>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {recipes.map((recipe) => (
              /* lowercase name and remove spaces */
              <Route path={`/recipes/${recipe.name.toLowerCase().replace(/\s/g, "")}`}
                element={<RecipePage {...recipe} />} />
            )
            )}
        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;
