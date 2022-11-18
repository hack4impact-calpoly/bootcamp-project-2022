import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMe from './components/about';
import Home from './components/Home'
import RecipePage from './components/RecipePage';

function App() {
  return (
    <main>  
      

    
    <BrowserRouter>

        <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="About" element={<AboutMe />} />
          <Route path="recipe/:id" element={<RecipePage/>} />
          <Route path="externalRecipe/:id" element={<RecipePage external />} />
          
        </Routes>
         
         
      
    
    </BrowserRouter>
  
    
  
    
    

    </main>

    
  );
}

export default App;
