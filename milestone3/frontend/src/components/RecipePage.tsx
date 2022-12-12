import React, { useState, useEffect, ChangeEvent } from 'react';
import { useParams } from "react-router-dom";
import './RecipePage.css';

export interface Recipe {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}

interface RecipePageProps {
  external?: boolean;
}

export default function RecipePage (props: RecipePageProps) {
  const { id } = useParams();

  const [recipe, setRecipe] = useState<Recipe>({
    name: "",
    description: "",
    image: "",
    ingredients: [],
    instructions: [],
  });

  // ingredients
  const [newIngredient, setNewIngredient] = useState('');
  const [allIngredients, setAllIngredients] = useState<any[]>([]);

  // instructions
  const [newInstruction, setNewInstruction] = useState('');
  const [allInstructions, setAllInstructions] = useState<any[]>([]);


  useEffect(() => {
    const getRecipes = async () => {
      let data = await fetch(`http://localhost:3001/Recipes/${id}`)
      let recipeData = await data.json();
      setRecipe(recipeData[0])
      setAllIngredients([...recipeData[0].ingredients])
      setAllInstructions([...recipeData[0].instructions]);
    }
    getRecipes();
  }, [id, props.external]);


  function addIngredient() {
    {setAllIngredients([...allIngredients, newIngredient])}
    
    const addIngredient = async() => {
      fetch(`http://localhost:3001/Recipes/${id}/ingredients`, {

      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
        body: JSON.stringify({"ingredient" : newIngredient}),
      })
  }
  addIngredient();
};


  function addInstruction() {
    {setAllInstructions([...allInstructions, newInstruction])}

    const addInstruction = async() => {
      fetch(`http://localhost:3001/Recipes/${id}/instructions`, {

      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
        body: JSON.stringify({"instruction" : newInstruction}),
      })
  }
  addInstruction();
};

  return (
  <body>
  <main>
    
      <section>
      <div className="flex-container">
        <div>
            <img className="flex-image" src={recipe.image} alt="img" />
        </div>

        <div className="flex-content">
          <h1>{recipe.name}</h1>
          <p>{recipe.description}</p>

        <h2>Ingredients</h2>
        <ul id="ingredients">
          {allIngredients?.map(function(name, index){
          return <li key={index}>{name} </li>;
          })}
        </ul>
          <h4> Add Ingredient </h4>
          <label> Ingredient: </label>
          <input
            id="newIngredient"
            className="form-element"
            placeholder="10 sprinkles"
            value={newIngredient}
            onChange={e => {
              setNewIngredient(e.target.value);
            }}
            />
            <button className="form-button" onClick={() => addIngredient()}>
              Enter
            </button>

        </div>
      </div>
      </section>
    
    
      <div className="flex-content">
        <h2>Preparation</h2>
        <ol id="instructions">
          {allInstructions?.map(function(name, index){
              return <li key={index}>{name}</li>
          })}
        </ol>
        <div>
          <h4> Add Instruction </h4>
          <label> Instruction: </label>
          <input
            id="newInstruction"
            className="form-element"
            placeholder="Knead dough"
            value={newInstruction}
            onChange={e => {
              setNewInstruction(e.target.value);
            }}
            />
            <button className="form-button" onClick={() => addInstruction()}>
              Enter
            </button>
        </div>
      </div>
    
  </main>
  </body>
  );
}

RecipePage.defaultProps = {
  external: false,
};