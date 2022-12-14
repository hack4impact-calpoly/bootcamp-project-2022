import React, { ChangeEvent, useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import recipes from "../recipeData";
import { Recipe } from "../recipeData";
import "./recipePage.css";

interface RecipePageProps {
    external: boolean;
}


export default function RecipePage(props: RecipePageProps) {
    const { id } = useParams();
    let [recipe, setRecipe] = useState({
        name: "a",
        description: "b",
        type: "c",
        image: "d",
        ingredients: ["e"],
        instructions: ["f"]
    });

    useEffect(() => {
        // for the external recipes
        // fetch(`https://bootcamp-milestone-4.onrender.com/recipe/${id}`)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setRecipe(data[0]);
        //         setAllInstructions(data[0].instructions);
        //         setAllIngredients(data[0].ingredients);
                
        // });
        fetch(`http://localhost:3001/recipe/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setRecipe(data[0]);
                setAllInstructions(data[0].instructions);
                setAllIngredients(data[0].ingredients);
        });  

    }, [id, props.external]);

    const [newIngredient, setNewIngredient] = useState('');
    const [allIngredients, setAllIngredients] = useState(recipe.ingredients);

    const [newInstruction, setNewInstruction] = useState('');
    const [newInstructionStep, setNewInstructionStep] = useState(0);
    const [allInstructions, setAllInstructions] = useState(recipe.instructions);

    async function addIngredient() {
        let body = {
            "ingredient": newIngredient
        }

        const headers = new Headers();
        headers.append("Content-type", "application/json");

        let opts = {
            method: "PUT",
            body: JSON.stringify(body),
            headers: headers
        };
        
        await fetch(`http://localhost:3001/recipe/${id}/ingredient`, opts);
        
        await fetch(`http://localhost:3001/recipe/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    setRecipe(data[0]);
                    setAllIngredients(data[0].ingredients);     
        });

    }

    async function addInstruction() {
        let body = {
            "instruction": newInstruction,
            "position": newInstructionStep
        }

        const headers = new Headers();
        headers.append("Content-type", "application/json");

        let opts = {
            method: "PUT",
            body: JSON.stringify(body),
            headers: headers
        };
        
        await fetch(`http://localhost:3001/recipe/${id}/instruction`, opts);
        
        await fetch(`http://localhost:3001/recipe/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    setRecipe(data[0]);
                    setAllInstructions(data[0].instructions);
        });
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
                    <button className="button" onClick={addIngredient}> 
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
                    <label htmlFor="Step"> Preparation Step (min 1): </label>
                    <input
                        type="number" 
                        id="Step" 
                        placeholder="1"
                        min="1"
                        max={allInstructions.length + 1}
                        value={newInstructionStep}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setNewInstructionStep(e.target.value as unknown as number);
                        }}
                    />
                    <br></br>
                    <button className="button" onClick={addInstruction}>
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