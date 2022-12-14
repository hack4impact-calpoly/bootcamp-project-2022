import React from "react";
import "./RecipePage.css";

import { useParams } from "react-router-dom";

import Recipe, { NONE } from "src/util/Recipe";
import recipeData from "src/data/recipes.json";
import { isExternal, getRecipeFromId, addIngredient, addInstruction, externalRecipesLoaded, loadExternalRecipes } from "src/util/ExternalRecipePort";

import ElementsManipulator from "src/components/misc/ElementsManipulator";

export default function RecipePage() {
    const { id } = useParams();

    if (id === undefined) {
        throw new TypeError("bruh moment: id is undefined");
    }

    const [recipe, setRecipe] = React.useState<Recipe>(NONE);
    const [image, setImage] = React.useState(<img className="recipe-image"/>)
    const [allIngredients, setAllIngredients] = React.useState<string[]>([]);
    const [allPreparationSteps, setAllPreparationSteps] = React.useState<string[]>([]);

    React.useEffect(() => {
        loadExternalRecipes((recipes) => {
            //then
            let recipeNew = getRecipeFromId(id);
            setRecipe(recipeNew);
            setImage(<img className="recipe-image" src={recipeNew.image}/>);

            setAllIngredients(recipeNew.ingredients);
            setAllPreparationSteps(recipeNew.instructions);
        });
    }, []);

    
    if (!isExternal(id)) {
        let index:number = parseInt(id);
        setRecipe(recipeData.list[index]);
        setImage(<img className="recipe-image" src={process.env.PUBLIC_URL + "/" + recipe.image}/>);
    }

    const addToIngredients = (ingredient: string) => {
        addIngredient(recipe, ingredient);
        setAllIngredients([...allIngredients, ingredient]);
    }

    const addToInstructions = (instruction: string) => {
        addInstruction(recipe, instruction);
        setAllPreparationSteps([...allPreparationSteps, instruction]);
    }

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
                                    onButtonClick={(inputIngredient) => addToIngredients(inputIngredient)}
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
                                    onButtonClick={(inputInstruction) => addToInstructions(inputInstruction)}
                                />
                            </ol>
                        </div>
                    </div>
                </div>

                {/* Recipe Image */}
                {image}
        
            </main>
        </div>
    );
}