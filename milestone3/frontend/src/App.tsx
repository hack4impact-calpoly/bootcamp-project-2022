import React from 'react';
import Navbar from './components/navbar';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import RecipePage from './components/RecipePage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='recipe/:id' element={<RecipePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
