import React, { useState, useEffect } from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar";
import RecipePage from './components/RecipePage'
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
      <BrowserRouter>

        <Navbar/>

        <Routes>
              <Route path = "/aboutme" element ={<About/>}/>
        </Routes>

        <Routes>
            <Route path = "/" element = {<Home/>} />
        </Routes>

        <Routes>
              <Route path = "recipe/:id" element ={<RecipePage />}/>
        </Routes>

        <Routes>
              <Route path = "externalRecipe/:id" element ={<RecipePage external />}/>
        </Routes>
      </BrowserRouter>
  );
} 

export default App;
