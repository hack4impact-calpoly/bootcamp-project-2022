import React, { useState, useEffect } from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar";
import RecipePage from './components/RecipePage'
import About from "./components/About";
import Home from "./components/Home";
import { response } from 'express';
import recipeData from '/recipeData';

interface Recipe{ 
      name: string;
      description: string;
      image: string;
      ingredients: string[];
      instructions: string[];
      altDesc: string;
}

function App() {
  return (
      <BrowserRouter>

        <Navbar/>

        <Routes>
            <Route path = "/aboutme" element ={<About/>}/>
            <Route path = "/" element = {<Home/>} />
            <Route path = "/:name" element ={<RecipePage/>}/>
            <Route path = "recipe/:name" element ={<RecipePage />}/>
            <{/*Route path = "externalRecipe/:name" element ={<RecipePage external />} */}>

        </Routes>
      </BrowserRouter>
  );
} 

export default App;
