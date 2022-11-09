import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import RecipePage from './components/RecipePage';
import RecipePreview from './components/RecipePreview';
import About from './components/AboutMe';

import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path='/AboutMe' element={<About />} />
        <Route path="/recipe/:name" element={<RecipePreview />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
