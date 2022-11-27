import './App.css';
import Navbar from "./components/navbar";
import About from "./components/About";
import Home from "./components/Home";
import RecipePage from "./components/RecipePage";
import recipes from './recipeData';
import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {

  return (
    <div className="entireBack">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/About" element = {<About/>}/>
        {/* {allRecipes.map((recipe) => ( */}
        <Route path="externalRecipe/:id" element = {<RecipePage external/>}/>   
        {/* ))} */}
        {/* {allRecipes.map((recipe) => ( */}
        <Route path="/Page/:id" element = {<RecipePage/>}/>   
        {/* ))} */}

      </Routes>
    </Router>
    </div>

  );
}
export default App;
