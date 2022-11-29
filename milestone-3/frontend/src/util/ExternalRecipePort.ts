import React from "react";
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
        recipe._id = EXTERNAL_PREFIX + recipe._id;
    }

    CACHE.externalRecipes = data;
    setExternalRecipes(data);
}

export function loadExternalRecipes(setExternalRecipes:(recipes:Recipe[]) => void) {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
        .then((res) => res.json())
        .then((data) => updateExternalRecipes(data, setExternalRecipes));
}

export function isExternal(id:string):boolean {
    return id.startsWith(EXTERNAL_PREFIX);
}

export function getRecipeFromId(id:string):Recipe {
    for (let i = 0; i < CACHE.externalRecipes.length; ++i) {
        let externalRecipe: Recipe = CACHE.externalRecipes[i];
        if (externalRecipe._id == id) {
            return externalRecipe;
        }
    }

    return NONE;
}

export {EXTERNAL_PREFIX, CACHE};