import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import RecipePage from './components/RecipePage';
import {BrowserRouter} from "react-router-dom"
import { Routes, Route } from "react-router";
import React from 'react';


function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="recipe/:id" element={<RecipePage />} />
      <Route path="externalRecipe/:id" element={<RecipePage external />} />
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;