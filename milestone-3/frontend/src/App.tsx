import React, { ChangeEvent, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//App components
import RecipePage from "./components/RecipePage";
import recipeData from "./recipeData.json";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import RecipePreview from "./components/RecipePage";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="recipes/:id" element={<RecipePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
