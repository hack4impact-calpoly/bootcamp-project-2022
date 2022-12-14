import './App.css';
import Navbar from "./components/navbar";
import About from "./components/About";
import Home from "./components/Home";
import RecipePage from "./components/RecipePage";
import recipes from './recipeData';
import {Recipe} from './recipeData';

import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  const [recipes, setNewRecipe] = useState<Recipe[]>([]);
  useEffect(() => {
    fetch("http://localhost:3001/Recipe/")        
    .then((res) => res.json())
    .then((recipes) => {
        setNewRecipe(recipes);
        })
    .catch((error) => console.log(error));
  }, []);

  return (
    <div className="entireBack">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/About" element = {<About />}/>
        <Route path="/Recipe/:id" element = {<RecipePage />}/>   
      </Routes>
    </Router>
    </div>

  );
}
export default App;
