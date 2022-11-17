import React from "react";
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import RecipePage from './components/RecipePage';
import About from './components/AboutMe';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="recipe/:id" element={<RecipePage />} />
          <Route path="externalRecipe/:id" element={<RecipePage external />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
