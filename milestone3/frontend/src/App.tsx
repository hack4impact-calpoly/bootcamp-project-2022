import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import RecipePage from './components/recipePage';

function App() {

  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe/:name" element={<RecipePage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
