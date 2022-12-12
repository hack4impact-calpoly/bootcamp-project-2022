import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import recipes from './recipeData';
// import Recipe from './components/recipe';
import RecipePage from './components/recipe';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [allRecipes, setUpdateRecipes] = useState(recipes);
  useEffect(() => {
    fetch('http://localhost:3001/recipe')
      .then((res) => res.json())
      .then((data) =>
        setUpdateRecipes((curr: any) => {
          return [...curr, ...data];
        })
      );
  }, []);



  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* home page */}
        <Route path="/" element={<Home />} />
        {/* about page */}
        <Route path="/about" element={<About />} />
        {/* recipe pages */}
        {allRecipes.map((recipe) => (
          <Route
            path="/recipes/:name"
            element={<RecipePage {...recipe}/>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;



