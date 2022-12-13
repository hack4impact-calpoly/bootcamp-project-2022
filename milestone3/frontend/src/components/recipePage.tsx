import React from 'react';
import {ChangeEvent, useState, useEffect} from 'react';
import './recipePage.css';
import recipes from '../recipeData';
import { Recipe } from '../recipeData';
import { useParams } from 'react-router-dom';


interface RecipePage {
    external?: boolean;
}

export default function RecipePage(props: RecipePage) {
    
    //prop
    const { id } = useParams();
    const [recipe, setRecipe] = useState({name: "", description: "", image: "", ingredients: [""], instructions: [""]})
    //states - ingredient
    const [ingredients, setIngredients] = useState(recipe ? recipe.ingredients : [""])
    const [newIngredient, setNewIngredient] = useState("");
    //states - instructions
    const [instructions, setInstructions] = useState(recipe ? recipe.instructions : [""])
    const [newInstruction, setNewInstruction] = useState("");

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setNewIngredient(event.currentTarget.value);
    }
    function handleChange2(event: ChangeEvent<HTMLInputElement>) {
        setNewInstruction(event.currentTarget.value);
    }

    

    useEffect(() => {
        if (props.external) {
            fetch("https://bootcamp-milestone-4.onrender.com/recipe/" + id)
            .then((res) => res.json())
            .then((data) => {
                setRecipe(data[0]);
                setIngredients(data[0].ingredients);
                setInstructions(data[0].instructions);})
        }

        else {
            let data = recipes.find(x =>  x.name == id)
            setRecipe(data ? data : {name: "", description: "", image: "", ingredients: [""], instructions: [""]})
            if (data){
                setRecipe(data)
                setIngredients(data.ingredients)
                setInstructions(data.instructions)
            }
          // query all of your recipe data for the recipe you want & setRecipe
        }
      }, [id, props.external]);

      
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
                    <button className = "button" onClick={() => setIngredients([...ingredients, newIngredient])}>
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
                <h3 className = 'text'> Add Instructions:</h3>
                <div className = "inputbutton">
                    <input
                        placeholder="Mix well and serve"
                        value={newInstruction} // add newInstruction as the input's value
                        onChange={handleChange2}
                    />
                    <button className= "button"onClick={() => setInstructions([...instructions, newInstruction])}>
                        Add Instruction
                    </button>
                </div>
            </div>


        </div> 
    
    )
}
RecipePage.defaultProps = {
  external: false,
};


