//import React from "react";
import Recipe, { NONE } from "./Recipe";

const EXTERNAL_PREFIX = "external_";

interface ExternalRecipeCache {
    externalRecipes: Recipe[];
}

const CACHE: ExternalRecipeCache = {
    externalRecipes: []
};

//const [externalRecipes, setExternalRecipes] = React.useState<Recipe[]>([]);

function updateExternalRecipes(data:Recipe[], setExternalRecipes:(recipes:Recipe[]) => void) {
    for (let i = 0; i < data.length; ++i) {
        let recipe = data[i];

        //automatically set as external
        if (!recipe._id.startsWith(EXTERNAL_PREFIX)) {
            const new_id = EXTERNAL_PREFIX + recipe._id;

            /*fetch(`http://localhost:3001/recipe/${recipe._id}`, 
            {
                method: "PUT", 
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    _id: new_id
                })
            });*/

            recipe._id = new_id;
        }
        
    }

    CACHE.externalRecipes = data;
    setExternalRecipes(data);
}

function deexternalizeID(id: string):string {
    return id.substring(id.indexOf(EXTERNAL_PREFIX) + EXTERNAL_PREFIX.length);
}

export function externalRecipesLoaded() {
    return CACHE.externalRecipes.length > 0;
}

export function loadExternalRecipes(setExternalRecipes:(recipes:Recipe[]) => void) {
    fetch("http://localhost:3001/recipe")
        .then((response) => response.json())
        .then((recipeData) => updateExternalRecipes(recipeData, setExternalRecipes))
        .catch((err) => { console.log(err); });
}

export function addIngredient(recipe: Recipe, ingredient: string) {
    fetch(`http://localhost:3001/recipe/${deexternalizeID(recipe._id)}/ingredient`,
    {
        method: "PUT",
        mode: "cors",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            newIngredient: ingredient
        })
    });
}

export function addInstruction(recipe: Recipe, instruction: string) {
    fetch(`http://localhost:3001/recipe/${deexternalizeID(recipe._id)}/instruction`,
    {
        method: "PUT",
        mode: "cors",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            newInstruction: instruction
        })
    });
}

/*export function loadHuChews(setExternalRecipes:(recipes:Recipe[]) => void) {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
        .then((res) => res.json())
        .then((data) => updateExternalRecipes(data, setExternalRecipes));
}*/

export function isExternal(id:string):boolean {
    return id.startsWith(EXTERNAL_PREFIX);
}

export function getRecipeFromId(id:string):Recipe {
    for (let i = 0; i < CACHE.externalRecipes.length; ++i) {
        let externalRecipe: Recipe = CACHE.externalRecipes[i];
        if (externalRecipe._id === id) {
            return externalRecipe;
        }
    }

    return NONE;
}

export {EXTERNAL_PREFIX, CACHE};