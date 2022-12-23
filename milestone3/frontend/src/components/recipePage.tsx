import React, { useState, ChangeEvent, useEffect} from 'react';
import './recipePreview.css'
import {Recipe} from "../recipeData"
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";


interface RecipePageProps {
  external?: boolean;
	// other recipe
}

export default function RecipePage(props: RecipePageProps)    {
    const {id} = useParams();
    const [recipe,setRecipe] = useState<Recipe>({
      name: "",
      description: "",
      image: "",
      ingredients: [],
      instructions: []
    })
    const [newIngredient, setNewIngredient] = useState('');
    const [allIngredients, setAllIngredients] = useState(recipe.ingredients); /* not re-rendering*/
    const [newInstruction, setNewInstruction] = useState('');
    const [allInstructions, setAllInstructions] = useState(recipe.instructions); /* not re-rendering*/
    
    function addIngredient() {
      fetch("http://localhost:3001/recipe/" + id + "/ingredient", 
        {method: "PUT", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({
            newIngredient: newIngredient,
        })})
      setAllIngredients([...allIngredients, newIngredient])
      console.log(allIngredients)
    }

    function addInstruction() {
      fetch("http://localhost:3001/recipe/" + id + "/instruction", 
      {method: "PUT", 
      headers: {"Content-Type": "application/json"}, 
      body: JSON.stringify({
          newInstruction: newInstruction,
      })})
      setAllInstructions([...allInstructions, newInstruction])
      console.log(allInstructions)
    }

    useEffect(() => {
      fetch("http://localhost:3001/recipe/"+id)        
      .then((res) => res.json())
      .then((data) => { 
        setAllIngredients(data.ingredients);
        setAllInstructions(data.instructions);      
        setRecipe(data);
      })
  });


  return (
      <main>
    <h1 className="bighead"> {recipe.name}</h1>

<   div className="recnumdiv"> 
    <img src={recipe.image} className="recpic"/>
    <div>
    <h2>Ingredients</h2>
    <ul>
    {recipe.ingredients.map(x=><li>{x}</li>)}
    </ul>

    <input
          placeholder="2 cups of spinach"
          value={newIngredient} // add newIngredient as the input's value
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            // this event handler updates the value of newIngredient
            setNewIngredient(e.target.value);
          }}
        />
        <button onClick={() => addIngredient()}>
        Add Ingredient
      </button>
  


    </div>
</div>

<h3>Steps to Success</h3>
<ol>
{recipe.instructions.map(x=><li>{x}</li>)}
</ol>
<input
          placeholder="Preheat the oven."
          value={newInstruction} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setNewInstruction(e.target.value);
          }}
        />
        <button onClick={() => addInstruction()}>
        Add Instruction
      </button>

</main>






  );}
  RecipePage.defaultrecipe = {
    external: false,
  };
