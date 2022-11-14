import "./RecipePage.css";
import { useParams } from "react-router-dom";
import recipeData from "../recipeData.json";
import React, { ChangeEvent, useState } from "react";

interface Recipe {
    link_name: string;
    name: string;
    image: string;
    description: string;
    ingredients: string[];
    instructions: string[];
}

const RecipePage = () => {
    const { id } = useParams();
    let i = recipeData.findIndex((data: Recipe) => data.link_name === id);

    const [newIngredient, setNewIngredient] = useState("");
    // State variable stores ingredient data as initial state
    const [allIngredients, setAllIngredients] = useState(
        recipeData[i].ingredients
    );

    const [newInstruction, setNewInstruction] = useState("");
    // State variable stores instruction data as initial state
    const [allInstructions, setAllInstrutctions] = useState(
        recipeData[i].instructions
    );

    return (
        <main>
            <div className="recipe-container">
                <h1 className="title-color text-center">
                    {recipeData[i].name}
                </h1>
                <p className="recipe-disc small-font">
                    {recipeData[i].description}
                </p>
                <div className="flex-container">
                    <img
                        className="recipe-img"
                        src={recipeData[i].image}
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
