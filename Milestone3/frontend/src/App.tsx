import React from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import RecipePage from './components/recipePage';





function App() {
  return (
    <BrowserRouter>
			<Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="recipe/:id" element={<RecipePage />} />
        <Route path="externalRecipe/:id" element={<RecipePage external/>} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
