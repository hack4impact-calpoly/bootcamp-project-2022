import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/navbar";
import About from "./components/About";
import Home from './components/Home';
import recipes from './recipeData.js';

function App() {
  return (
    // <Navbar />
    // <About />
    // <Home />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;