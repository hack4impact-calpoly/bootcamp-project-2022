import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/about';
import RecipePage from './components/RecipePage';

function App() {

 
  return (
    <div className="App">
        
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="recipe/:id" element={<RecipePage />} />
            <Route path="externalRecipe/:id" element={<RecipePage external />} />
            
          </Routes>
        </BrowserRouter>
 
    </div>
  );
}

export default App;
