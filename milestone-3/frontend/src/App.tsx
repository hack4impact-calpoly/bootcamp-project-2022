import React, { ChangeEvent, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//App components
import RecipeCard from "./components/RecipeCard";
import recipeData from "./recipeData.json";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import RecipePreview from "./components/RecipePreview";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="recipes/:id" element={<RecipePreview />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
