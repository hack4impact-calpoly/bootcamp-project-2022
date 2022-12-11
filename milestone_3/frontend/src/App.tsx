import React from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Home from "./components/Home"
import About from "./components/About"
import RecipePage from './components/RecipePage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path= "/" element = {<Home/>} />
            <Route path="about" element={<About />} />
            <Route path="recipe/:id" element={<RecipePage />} />
          </Routes>
          </BrowserRouter>
    </div>
      
      
  );
}

export default App;
