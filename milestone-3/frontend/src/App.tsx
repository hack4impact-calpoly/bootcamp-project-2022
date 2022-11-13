import React from 'react';
import './App.css';
import Home from './components/home';
import About from './components/About';
import RecipePage from './components/RecipePage';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/About" element={<About />} />
        <Route path="/Page/:id" element={<RecipePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
