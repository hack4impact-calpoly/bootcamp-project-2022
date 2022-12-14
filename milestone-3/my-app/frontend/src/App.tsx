import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import RecipePage from './components/RecipePage'
import Navbar from "./components/navBar/navbar";
import About from "./components/aboutMe/aboutme";
import Home from "./components/home/home";
import { response } from 'express';
import recipeData from './components/recipeData';

interface Recipe{ 
  name: string;
  image: string;
  description: string;
  imgAltName: string;
  ingredients: string[];
  instructions: string[];
  orig_link: string; 
  orig_link_name: string;
  buttonHref: string;
}



function App() {

  // const[recipes, setRecipes] = useState<Recipe[]>([]); 

  // useEffect (() => {
  //   fetch("http://localhost3001/recipes")
  //   .then(response => response.json()) 
  //   .then(recipeData => setRecipes(recipeData))
  //   .catch(err => console.log(err))
  // },[]);

  return (
    <body>
      <BrowserRouter>  
       <Navbar/>
        <Routes>
              <Route path = "/aboutme" element ={<About/>}/>
              <Route path = "/" element = {<Home/>} />
              <Route path = "/:name" element ={<RecipePage/>}/>
        </Routes>
      </BrowserRouter>
    </body>
  );
} 
export default App;
