import React from "react";
import "./RecipePage.css";
import { useParams } from "react-router-dom";
import recipeData from "../recipeData.json";

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
    function search(data: Recipe[], name: String | undefined) {
        for (let j = 0; j < data.length; j++) {
            if (data[j].link_name === name) {
                return j;
            }
        }
        return -1;
    }
    let i = search(recipeData, id);
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
                        <ul className="small-font">
                            {recipeData[i].ingredients.map(function (
                                name,
                                index
                            ) {
                                return <li key={index}>{name}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="recipe-instruct">
                <h1 className="instruct-title title-color">Instructions</h1>
                <ol className="small-font">
                    {recipeData[i].instructions.map(function (name, index) {
                        return <li key={index}>{name}</li>;
                    })}
                </ol>
            </div>
        </main>
    );
};

export default RecipePage;
