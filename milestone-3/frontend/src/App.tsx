import React from 'react';
import './App.css';
import Navbar from "./components/navbar";
import About from "./components/About";
import Home from "./components/Home";
import RecipePage from "./components/RecipePage";


import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="entireBack">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="About" element = {<About />}/>
        {/* <Route path="/Page/:id" element = {<RecipePage/>}/> */}
      </Routes>

    
    </BrowserRouter>
    </div>

  );
}

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
      
//     </div>
//   );
// }

export default App;
