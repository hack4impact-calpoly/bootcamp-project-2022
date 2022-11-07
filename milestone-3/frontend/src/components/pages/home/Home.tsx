import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";

import Recipe from "src/util/Recipe";
import recipeData from "src/data/recipes.json";

export default function Home() {
    const recipes:Recipe[] = recipeData.list;

    let dishPreview = (recipe: Recipe) => {
        let id = "/recipe/" + recipe.id;  
        let imagePath = process.env.PUBLIC_URL + "/" + recipe.imagePath;

        return (
            <div className="dish-card">
                <h2><Link className="dish-title-text" to={id}>{recipe.name}</Link></h2>

                <div className="dish-card-body">
                    <img className="dish-image" src={imagePath} alt={recipe.name}/>
                    <p className="dish-desc">{recipe.desc}</p>
                </div>
            </div>
        );
    };

    return (
        <div id="body-home">
            <main id="home-main">
                <h1 id="dishlist-title-text">Ameer's World Class Dishes</h1>

                {/* Recipes List */}
                <div id="dish-list">
                    {recipes.map(dishPreview)}
                </div>
            </main>
        </div>
    );
}