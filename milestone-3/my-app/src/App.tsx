import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import RecipePage from './components/RecipePage'
import Navbar from "./components/navBar/navbar";
import About from "./components/aboutMe/aboutme";
import Home from "./components/home/home";


function App() {
  return (
    <body>
      <BrowserRouter>
        
        <Navbar/>

        <Routes>
              <Route path = "/aboutme" element ={<About/>}/>
        </Routes>

        <Routes>
            <Route path = "/" element = {<Home/>} />
        </Routes>

        <Routes>
              <Route path = "/:id" element ={<RecipePage/>}/>
        </Routes>

      </BrowserRouter>
    </body>
  );
} 

export default App;
