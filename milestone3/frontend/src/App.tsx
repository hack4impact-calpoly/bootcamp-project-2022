import React from 'react';
import Navbar from './components/navbar';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path = "about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
