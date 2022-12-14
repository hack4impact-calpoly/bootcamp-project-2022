import '../recipe.css'
// import recipes, { Recipe } from "./recipeData";
import { Recipe } from "./recipeData";
import { useParams } from "react-router-dom";

// milestone 3.5
import React, { ChangeEvent, useState } from 'react';
import { useEffect } from "react";

// interface RecipePageProps {
//     external?: boolean;
//     name: string;
//     image: string;
//     description: string;
//     ingredients: string[];
//     instructions: string[];
// }

function RecipePage(props: Recipe) {
    
    const [fetRecipes, setFetRecipes] = useState<Recipe[]>([])
    useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
    .then((response) => response.json())
    .then((data) => setFetRecipes(data))
    }, [])

    const [recipes, setRecipes] = useState<Recipe[]>([])
    useEffect(() => {
      fetch("http://localhost:3001/recipe")
        .then((res) => res.json())
        .then((data) => setRecipes(data));
    }, []);

    let all = [...recipes, ...fetRecipes];

    let { name } = useParams();
    let recipe = all.find((r) => r.name === name)

    // new state
    const [allIngredients, setAllIngredients] = useState(props.ingredients);
    const [newIngredient, setNewIngredient] = useState('');

    const [allInstructions, setAllInstructions] = useState(props.instructions);
    const [newInstruction, setNewInstruction] = useState('');

    function addIngredient() {
        fetch("http://localhost:3001/recipe/" + props.name + "/ingredient", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ newIngredient: newIngredient }),
        });
        setAllIngredients([...allIngredients, newIngredient]);
        console.log(allIngredients);
    }
    
    function addInstruction() {
        fetch("http://localhost:3001/recipe/" + props.name + "/instruction", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ newInstruction: newInstruction }),
        });
        setAllInstructions([...allInstructions, newInstruction]);
        console.log(allInstructions);
    }

    if(recipe) {
        return (
            <body>
                <div className="center-image">
                <img src={recipe.image} />
                </div>
                <h2>{recipe.name}</h2>
    
                <h3>Ingredients</h3>
    
                <ul>
                    {allIngredients.map((i) => (<li>{i}</li>))}
                </ul>

                <div className="newvalues">
                    {/* add new ingredient */}
                    <p>Add a new ingredient: </p>

                    <input placeholder="2 cups of cherries"
                        value={newIngredient} // add newIngredient as the input's value
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            // this event handler updates the value of newIngredient
                            setNewIngredient(e.target.value); }}
                    />

                    {/* appends new ingredient */}
                    <button onClick={addIngredient}>Add Ingredient</button>
                </div>
    
                <h3>Preparation + Instructions</h3>
    
                <ol>
                    {allInstructions.map((instr) => (<li>{instr}</li>))}
                </ol>

                <div className="newvalues">
                    {/* add new instruction */}
                    <p>Add a new instruction: </p>

                    <input placeholder="Mix in the breading"
                        value={newInstruction} // add newInstruction as the input's value
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            // this event handler updates the value of newInstruction
                            setNewInstruction(e.target.value); }}
                    />

                    {/* appends new instruction */}
                    <button onClick={addInstruction}>Add Instruction</button>
                </div>
    
            </body>
        )
    }
    else {
        return(<div></div>);
    }
    
}

export default RecipePage;