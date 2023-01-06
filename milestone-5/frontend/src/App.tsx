import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import Navbar from "./components/Navbar";
import About from './components/About';
import Home from './components/Home';
import RecipePage from './components/recipePage';
import './App.css';

export interface Recipe {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/recipe")
    .then((response) => response.json())
    .then((recipeData) => setRecipes(recipeData))
    .catch(err => console.log(`Could not fetch recipes due to ${err}`))
  }, []);
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/about" element = {<About/>} />
        {/* <Route path = "/recipe/:id" element = {<RecipePage recipeProps = {recipes}/>}/> */}
        <Route path = "externalRecipe/:id" element = {<RecipePage recipeProps = {recipes} external/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
