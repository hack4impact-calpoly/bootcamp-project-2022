import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import RecipePage from './components/RecipePage';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter> {/* Links to all pages on website */}
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/recipe/:name" element={<RecipePage />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
