import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";

import Recipe from "src/util/Recipe";
//import recipeData from "src/data/recipes.json";

import { loadExternalRecipes } from "src/util/ExternalRecipePort";

export default function Home() {
    //const recipes = recipeData.list;
    const [externalRecipes, setExternalRecipes] = React.useState<Recipe[]>([])

    React.useEffect(() => {
        loadExternalRecipes(setExternalRecipes);
    }, []);

    let dishPreview = (recipe: Recipe) => {
        let id = "/recipe/" + recipe._id;  

        return (
            <div className="dish-card">
                <h2><Link className="dish-title-text" to={id}>{recipe.name}</Link></h2>

                <div className="dish-card-body">
                    <img className="dish-image" src={recipe.image} alt={recipe.name}/>
                    <p className="dish-desc">{recipe.description}</p>
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
                    {/*recipes.map(dishPreview)*/}
                    {externalRecipes.map(dishPreview)}
                </div>
            </main>
        </div>
    );
}