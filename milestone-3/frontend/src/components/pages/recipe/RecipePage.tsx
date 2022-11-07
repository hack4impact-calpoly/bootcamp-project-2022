import React from "react";
import "./RecipePage.css";

import { useParams } from "react-router-dom";

import Recipe from "src/util/Recipe";
import recipeData from "src/data/recipes.json";

/*interface RecipePageProps {
    recipeIndex: number;
}*/

export default function RecipePage(/*{recipeIndex}:RecipePageProps*/) {
    const { id } = useParams();

    if (id === undefined) {
        throw new TypeError("bruh moment: id is undefined");
    }

    const index:number = parseInt(id);
    const recipe:Recipe = recipeData.list[index];

    let toListItem = (str:string) => (<li>{str}</li>);

    let imagePath = process.env.PUBLIC_URL + "/" + recipe.imagePath;

    return (
        <div id="body-recipe">
            <main id="recipe-main">
                {/* Recipe Info */}
                <div className="recipe-info">
                    <div className="recipe-info-body">
                        <h1 className="recipe-title-text">{recipe.name}</h1>

                        <p className="recipe-desc">{recipe.desc}</p>

                        <div className="ingredients-info">
                            <h3 className="info-label"><u>Ingredients</u></h3>

                            <ul className="info-list">
                                {recipe.ingredients.map(toListItem)}
                            </ul>
                        </div>

                        <div className="preparation-info">
                            <h3 className="info-label"><u>Preparation</u></h3>

                            <ol className="info-list">
                                {recipe.preparation.map(toListItem)}
                            </ol>
                        </div>
                    </div>
                </div>

                {/* Recipe Image */}
                <img className="recipe-image" src={imagePath}/>
        
            </main>
        </div>
    );
}