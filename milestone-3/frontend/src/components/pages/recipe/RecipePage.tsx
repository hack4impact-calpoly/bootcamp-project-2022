import React, { ChangeEvent } from "react";
import "./RecipePage.css";

import { useParams } from "react-router-dom";

import Recipe from "src/util/Recipe";
import recipeData from "src/data/recipes.json";
import { isExternal, getRecipeFromId } from "src/util/ExternalRecipePort";

import ElementsManipulator from "src/components/misc/ElementsManipulator";

export default function RecipePage() {
    const { id } = useParams();

    if (id === undefined) {
        throw new TypeError("bruh moment: id is undefined");
    }

    let recipe:Recipe;
    let imagePath:string;
    if (isExternal(id)) {
        recipe = getRecipeFromId(id);
        imagePath = recipe.image;
    } else {
        let index:number = parseInt(id);
        recipe = recipeData.list[index];
        imagePath = process.env.PUBLIC_URL + "/" + recipe.image;
    }
    
    const [allIngredients, setAllIngredients] = React.useState(recipe.ingredients);
    const [allPreparationSteps, setAllPreparationSteps] = React.useState(recipe.instructions);

    // general
    const toListItem = (str:string) => (<li>{str}</li>);

    return (
        <div id="body-recipe">
            <main id="recipe-main">
                {/* Recipe Info */}
                <div className="recipe-info">
                    <div className="recipe-info-body">
                        <h1 className="recipe-title-text">{recipe.name}</h1>

                        <p className="recipe-desc">{recipe.description}</p>

                        <div className="ingredients-info">
                            <h3 className="info-label"><u>Ingredients</u></h3>

                            {/* Ingredients list */}
                            <ul className="info-list">
                                {allIngredients.map(toListItem)}
                                <ElementsManipulator
                                    placeholder="1 cup of awesome sauce"
                                    buttonText="Add Ingredient"
                                    onButtonClick={(inputIngredient) => setAllIngredients([...allIngredients, inputIngredient])}
                                />
                            </ul>
                        </div>

                        <div className="preparation-info">
                            <h3 className="info-label"><u>Preparation</u></h3>
                            
                            {/* Preparation steps */}
                            <ol className="info-list">
                                {allPreparationSteps.map(toListItem)}
                                <ElementsManipulator
                                    placeholder="Mix in water"
                                    buttonText="Add Instruction"
                                    onButtonClick={(inputInstruction) => setAllPreparationSteps([...allPreparationSteps, inputInstruction])}
                                />
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