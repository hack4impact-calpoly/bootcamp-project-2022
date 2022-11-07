import React from "react";
import "./Main.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "../navbar/Navbar";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import RecipePage from "../pages/recipe/RecipePage";

//main activity
export default function Main() {
    return (
        <div id="main">
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/recipe/:id" element={<RecipePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}