import "./RecipePage.css";
import { useParams } from "react-router-dom";
import recipeData from "../recipeData.json";
import React, { useEffect, ChangeEvent, useState } from "react";

interface CustomRecipe {
    link_name: string;
    name: string;
    image: string;
    description: string;
    ingredients: string[];
    instructions: string[];
}
interface RecipePageProps {
    external?: boolean;
}

interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
}

const RecipePage = (props: RecipePageProps) => {
    const { id } = useParams();
    const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);

    const [recipe, setRecipe] = useState<Recipe>(recipeData[1]);

    // setState and useParams
    useEffect(() => {
        if (props.external) {
            console.log("External url");
            // make an API call with the url param & setRecipe
            fetch("https://bootcamp-milestone-4.onrender.com/recipe")
                .then((res) => res.json())
                .then((data) => {
                    setExternalRecipes(data);
                    return data;
                })
                .then((data) => {
                    let i = data.findIndex(
                        (r: Recipe) =>
                            r.name.toLowerCase().replace(/[^a-z0-9]/gi, "") ===
                            id
                    );
                    setRecipe(data[i]);
                });
        } else {
            // query all of your recipe data for the recipe you want & setRecipe
            let i = recipeData.findIndex(
                (data: CustomRecipe) => data.link_name === id
            );
            setRecipe(recipeData[i]);
        }
    }, [id, props.external]);

    console.log(recipe.ingredients);
    const [newIngredient, setNewIngredient] = useState<string>("");
    // State variable stores ingredient data as initial state
    const [allIngredients, setAllIngredients] = useState<string[]>(
        recipe.ingredients
    );

    const [newInstruction, setNewInstruction] = useState<string>("");
    // State variable stores instruction data as initial state
    const [allInstructions, setAllInstrutctions] = useState<string[]>(
        recipe.ingredients
    );
    useEffect(() => {
        setAllIngredients(recipe.ingredients);
        setAllInstrutctions(recipe.instructions);
    }, [recipe]);

    return (
        <main>
            <div className="recipe-container">
                <h1 className="title-color text-center">{recipe.name}</h1>
                <p className="recipe-disc small-font">{recipe.description}</p>
                <div className="flex-container">
                    <img
                        className="recipe-img"
                        src={recipe.image}
                        height="300"
                        width="300"
                    />
                    <div className="ingredients">
                        <h1 className="title-color">Ingredients</h1>
                        {/* Renders all ingredients */}
                        <ul className="small-font">
                            {allIngredients.map(function (name, index) {
                                return <li key={index}>{name}</li>;
                            })}
                        </ul>
                        <input
                            className="input-box"
                            placeholder="2 cups of spinach"
                            value={newIngredient} // add newIngredient as the input's value
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                // this event handler updates the value of newIngredient
                                setNewIngredient(e.target.value);
                            }}
                        />
                        <button
                            className="addButton"
                            onClick={() =>
                                setAllIngredients([
                                    ...allIngredients,
                                    newIngredient,
                                ])
                            }
                        >
                            Add Ingredient
                        </button>
                    </div>
                </div>
            </div>
            <div className="recipe-instruct">
                <h1 className="instruct-title title-color">Instructions</h1>
                <ol className="small-font">
                    {allInstructions.map(function (name, index) {
                        return <li key={index}>{name}</li>;
                    })}
                </ol>
                <input
                    className="input-box"
                    placeholder="Mix sugar with salt"
                    value={newInstruction} // add newInstruction as the input's value
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        // this event handler updates the value of newInstruction
                        setNewInstruction(e.target.value);
                    }}
                />
                <button
                    className="addButton"
                    onClick={() =>
                        setAllInstrutctions([
                            ...allInstructions,
                            newInstruction,
                        ])
                    }
                >
                    Add Instruction
                </button>
            </div>
        </main>
    );
};

export default RecipePage;
