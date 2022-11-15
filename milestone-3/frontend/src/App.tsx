import React from 'react';
import './App.css';
import Navbar from "./components/navbar";
import About from "./components/About";
import Home from "./components/Home";
import RecipePage from "./components/RecipePage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="entireBack">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/About" element = {<About/>}/>
        <Route path="/Page/:id" element = {<RecipePage/>}/>
      </Routes>
    </Router>
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
