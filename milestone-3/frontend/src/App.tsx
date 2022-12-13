import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import Navbar from "./components/Navbar";
import About from './components/About';
import Home from './components/Home';
import RecipePage from './components/recipePage';
import recipes from './recipeData';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/about" element = {<About/>} />
        <Route path = "/recipe">
          <Route 
            path = ":id" 
            element = {<RecipePage props = {recipes}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
