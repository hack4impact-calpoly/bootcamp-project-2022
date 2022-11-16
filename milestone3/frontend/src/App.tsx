import React from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import RecipePage from "./components/recipePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="recipe/:id" element={<RecipePage />} />
        <Route path="externalRecipe/:id" element={<RecipePage external />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
