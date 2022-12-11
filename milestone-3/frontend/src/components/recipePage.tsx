import React, { ChangeEvent, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import recipes from "../recipeData";
import { Recipe } from "../recipeData";
import "./recipePage.css";

interface RecipePageProps {
    external: boolean;
}


export default function RecipePage(props: RecipePageProps) {
    const { id } = useParams();
    let [recipe, setRecipe] = useState(recipes[0])
    useEffect(() => {
        if (props.external) {
            fetch(`https://bootcamp-milestone-4.onrender.com/recipe/${id}`)
                .then((res) => res.json())
                .then((data) => setRecipe(data));
            
        }
        else {
            setRecipe(recipes.find(recipe => recipe.type === id) as Recipe);
            
        }

    }, [id, props.external]);
    console.log(id)
    

    const [newIngredient, setNewIngredient] = useState('');
    const [allIngredients, setAllIngredients] = useState(recipe.ingredients);

    const [newInstruction, setNewInstruction] = useState('');
    const [newInstructionStep, setNewInstructionStep] = useState(0);
    const [allInstructions, setAllInstructions] = useState(recipe.instructions);

    function cloneInstructions(instruction: string, step: number) {
        let clone  = Object.assign([], allInstructions);
        clone.splice(step - 1, 0, instruction)
        return clone
    }

    return (
        <body>
            <div className="description">
                <h1>{recipe.name}</h1>
                <p className="description-text"> {recipe.description} </p>
            </div>

            <main className="main-content">
                <div>
                    <img className="recipe-image" src={`../cheerios/${recipe.image}`} alt="file path didn't work"></img>
                </div>


                <div className="ingredients">
                    <h2>Ingredients</h2>
                    <ul>
                        {allIngredients.map(function(name) {
                            return <li>{name}</li>;
                        })}
                    </ul>
                </div>


                <div className="preparation">
                    <h2> Preparation </h2>
                    <ol>
                        {allInstructions.map(function(name, index) {
                            return <li key={index}>{name}</li>
                            
                        })}
                    </ol>
                </div>

                <div className="form">
                    <h2>Add New Ingredients</h2>
                    <label htmlFor="ingredient">Ingredient: </label>
                    <input 
                        type="text"
                        id="ingredient" 
                        value={newIngredient} 
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            // this event handler updates the value of newIngredient
                            setNewIngredient(e.target.value);
                        }}/>
                    <br></br>
                    <button className="button" onClick={() => {setAllIngredients([...allIngredients, newIngredient])}}> 
                        Add Ingredient
                    </button>
                </div>

                <div className="form">
                    <h2>Add New Instructions</h2>
                    <label htmlFor="instruction">Instruction: </label>
                    <input
                        type="text" 
                        id="instruction" 
                        placeholder="add more cereal" 
                        value={newInstruction}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setNewInstruction(e.target.value);
                        }}
                    />
                    <br></br>
                    <label htmlFor="Step"> Preparation Step (i.e 2): </label>
                    <input
                        type="number" 
                        id="Step" 
                        placeholder="1"
                        min="1"
                        value={newInstructionStep}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setNewInstructionStep(e.target.value as unknown as number);
                        }}
                    />
                    <br></br>
                    <button className="button" onClick={() => {setAllInstructions(cloneInstructions(newInstruction, newInstructionStep))}}>
                        Add Instruction
                    </button>
                </div>

            </main>
        </body>
        
    )
}

RecipePage.defaultProps = {
    external: false,
};