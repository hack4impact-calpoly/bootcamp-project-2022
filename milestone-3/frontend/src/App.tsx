import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import recipeData from "./recipeData.js"
import RecipePage from "./components/recipePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

    

function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/recipe/:name" element={<RecipePage />} />
       </Routes>
     </BrowserRouter>
  )
      {/* <Navbar />
      <Home />
      <About/> */}
    //   <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //   </Routes>
    // </BrowserRouter>
      {/* // <recipeCard name={recipeData[0].name} image={recipeData[0].image} desc={recipeData[0].description}/> 
      // {recipeData.map(recipe => */}
      {/* //   <recipeCard name={recipe.name} image={recipe.image} desc={recipe.description} /> */}
}

export default App;