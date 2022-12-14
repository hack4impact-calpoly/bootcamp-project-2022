import React from 'react';
import './App.css';
import Navbar from "./navbar";
import Home from "./Home";
import About from "./About";
import RecipePage from './RecipePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
        <div className="webpage">
            <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe/:name" element={<RecipePage />} />
        <Route path="/externalRecipe/:name" element={<RecipePage external />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
  
}

export default App;
