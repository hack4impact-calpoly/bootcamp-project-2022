import React from 'react';
import './App.css';
import Home from './components/home';
import About from './components/About';
import RecipePage from './components/RecipePage';
import NavBar from './components/NavBar';
import { useEffect } from 'react';
import recipe_list from './recipeData';
import { Recipe } from './recipeData';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [allRecipes, setAllRecipes] = useState(recipe_list);
  useEffect(() => {
    fetch('https://bootcamp-milestone-4.onrender.com/recipe')
      .then((res) => res.json())
      .then((data) => setAllRecipes((recipes)=>{
        
        return[...recipes, data]
      }))
  }, []);
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/About" element={<About />} />

        {allRecipes.map((recipe) => {
          console.log(recipe.name)
          return(
            <Route path={`/Page/:name`} element={<RecipePage {...recipe}/>} />
          )
        })
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
