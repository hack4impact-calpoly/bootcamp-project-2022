import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './RecipePage.css';

export interface Recipe {
  id: string;
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

  const [recipe, setRecipe] = useState<Recipe>({
    id: "",
    name: "",
    description: "",
    image: "",
    ingredients: [],
    instructions: [],
  });

  const { name } = useParams();

  // ingredients
  const [newIngredient, setNewIngredient] = useState('');
  const [allIngredients, setAllIngredients] = useState(recipe.ingredients);

  // instructions
  const [newInstruction, setNewInstruction] = useState('');
  const [allInstructions, setAllInstructions] = useState(recipe.ingredients);

  useEffect(() => {
    fetch(`http://localhost:3001/Recipes/${name}}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data[0]);
      })
  }, [props.external]);

  useEffect(() => {
    setAllIngredients(recipe.ingredients)
    setAllInstructions(recipe.instructions)
  }, [recipe])

  return (
  <body>
  <main>
    
      <section>
      <div className="flex-container">
        <div>
            <img className="flex-image" src={recipe?.image} alt="img" />
        </div>

        <div className="flex-content">
          <h1>{recipe?.name}</h1>
          <p>{recipe?.description}</p>

        <h2>Ingredients</h2>
        <ul id="ingredients">
          {allIngredients.map(function(name, index){
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
            <button className="form-button" onClick={() => setAllIngredients([...allIngredients, newIngredient])}>
              Enter
            </button>

        </div>
      </div>
      </section>
    
    
      <div className="flex-content">
        <h2>Preparation</h2>
        <ol id="instructions">
          {allInstructions.map(function(name, index){
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
            <button className="form-button" onClick={() => setAllInstructions([...allInstructions, newInstruction])}>
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