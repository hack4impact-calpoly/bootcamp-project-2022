import React from 'react';
import recipes from '../recipeData';
import Navbar from "./Navbar";
import { Recipe } from '../recipeData';

export default function RecipePage(props: Recipe) {
    return (
        <header>
        <Navbar />
        <div className="recipe-box">  
        <img src="https://salu-salo.com/wp-content/uploads/2014/06/Chicken-Sotanghon-Soup-Bean-Thread-Noodle-Soup-3.jpg" alt={props.name} className="pic-2"/>
        <div className="recipe-1">
            <h2 className="title-txt">Chicken Sotanghon</h2>
            <p>{props.description}</p>
            <h1 className="big-txt">Ingredients</h1>
            <ul>
                <li>1 tablespoon canola oil</li>
            </ul>
            <h1 className="big-txt">Preparation</h1>
            <ol>
                <li>In a large pot over medium heat, heat oil. Add onions, garlic, and ginger and cook until softened.</li>
            </ol>
        </div>
    </div>
    </header>
    );
}