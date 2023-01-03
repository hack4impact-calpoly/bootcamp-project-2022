import React from 'react';
import {ChangeEvent, useState, useEffect} from 'react';
import './recipePage.css';
import { useParams } from 'react-router-dom';


interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[]; // type not capitalized
    
  }
export default function Recipe() {
    
    //useParams
    const { name } = useParams();
    //states: recipe
    const [recipe, setRecipe] = useState<Recipe>({
        name: "",
        description: "",
        image: "", 
        ingredients: [], 
        instructions: []
    })
    //states - ingredient
    const [ingredients, setIngredients] = useState(recipe ? recipe.ingredients : [""])
    const [newIngredient, setNewIngredient] = useState("");
    //states - instructions
    const [instructions, setInstructions] = useState(recipe ? recipe.instructions : [""])
    const [newInstruction, setNewInstruction] = useState("");
    
    useEffect(() => {
        fetch("http://localhost:3001/recipe/" + name)
        .then((response) => response.json())
        .then(recipeData => {
            setRecipe(recipeData[0]);
            setIngredients(recipeData[0].ingredients);
            setInstructions(recipeData[0].instructions);}).catch(err => console.log(err))
    }, [name])

    //make changes (add ing/ins) persist

    async function addIngredient(){
        
        await fetch("http://localhost:3001/recipe/" + name + "/ingredient", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
           },
            body: JSON.stringify({ingredient: newIngredient})
        })
            
        
        setIngredients([...ingredients, newIngredient])
        
    }


    async function addInstruction(){
        await fetch("http://localhost:3001/recipe/" + name + "/instruction", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
           },
            body: JSON.stringify({instruction: newInstruction})
        })
            
        
        setInstructions([...instructions, newInstruction])
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setNewIngredient(event.currentTarget.value);
    }
    function handleChange2(event: ChangeEvent<HTMLInputElement>) {
        setNewInstruction(event.currentTarget.value);
    }

    useEffect(() => {
        fetch("https://localhost:3001/recipe/" + name)
        .then((res) => res.json())
        .then((data) => {
            setRecipe(data[0]);
            setIngredients(data[0].ingredients);
            setInstructions(data[0].instructions);})
      }, [name]);

      
    return (

        <div className = " backgroundcolor">
            <h1 className = "important text"> {recipe.name} </h1>
            <h4 className = "flex-container4 text"> {recipe.description} </h4>
                <br></br>
            <img className = "flex-container3 imgscales" src= {recipe.image} />    
        

            {/* Ingredients */}
            <h1 className = "important text"> Ingredients </h1>
            
            {/* used map to change make a unordered list of all list elements for ingredients*/}
            <ul>
                <h3 className = 'text'>
                {ingredients.map(ingredient => <li>{ingredient}</li>)}
                </h3>
            </ul>

            <div className = "flex-container5">
                <h3 className = 'text'> Add Ingredient:</h3>
                <div className = "inputbutton">
                    <input
                        placeholder="2 cups of spinach"
                        value={newIngredient} // add newIngredient as the input's value
                        onChange={handleChange}
                        
                    />
                    <button className = "button" onClick={addIngredient}>
                        Add Ingredient
                    </button>
                </div>
            </div>
            {/* Instructions */}
            
                {/* used map to change make a unordered list of all list elements for instructions*/}
                <h1 className = "important text"> Instructions </h1>
                <ol>
                    <h3 className = 'text '>
                    {instructions.map(instruction => <li>{instruction}</li>)}
                    </h3>
                </ol>
            
            <div className = "flex-container5">
                <h3 className = 'text'> Add Instruction:</h3>
                <div className = "inputbutton">
                    <input
                        placeholder="Mix well and serve"
                        value={newInstruction} // add newInstruction as the input's value
                        onChange={handleChange2}
                    />
                    <button className= "button"onClick={addInstruction}>
                        Add Instruction
                    </button>
                </div>
            </div>
        </div> 
    )
}
Recipe.defaultProps = {
  external: false,
};


