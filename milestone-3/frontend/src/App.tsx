import React, { ChangeEvent, useState } from "react";
import "./App.css";
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
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/recipes"
                        element={recipeData.map((recipe) => (
                            <RecipePreview
                                name={recipe.name}
                                image={recipe.image}
                                desc={recipe.description}
                                ingredients={recipe.ingredients}
                                instructions={recipe.instructions[0]}
                            />
                        ))}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
