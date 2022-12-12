import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from "./components/navbar"
import RecipePreview from './components/RecipePreview';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "about" element = {<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
