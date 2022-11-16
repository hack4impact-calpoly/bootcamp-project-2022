import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import RecipePage from './components/RecipePage';
import recipes from './recipeData';

function App() {
  // const [importedRecipes, setImportedRecipes] = useState<Recipe[]>();
  const [updateRecipes, setUpdateRecipes] = useState(recipes);
  useEffect(() => {
    fetch('https://bootcamp-milestone-4.onrender.com/recipe')
      .then((res) => res.json())
      .then((data) =>
        setUpdateRecipes((old: any) => {
          return [...old, ...data];
        })
      );
  }, []);


  // useEffect(() => {
  //   console.log('Checking updateRecipes =', updateRecipes);
  // }, [updateRecipes]);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home updateRecipes={updateRecipes} />} />
          <Route path="/about-me" element={<About />} />
          <Route
            path="/recipes/:name"
            element={<RecipePage updateRecipes={updateRecipes} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
