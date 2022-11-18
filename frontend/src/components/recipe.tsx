import React, { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useState, ChangeEvent, useEffect } from 'react';

import './about.css';


interface RecipeProps {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  }

export default function Recipe(props: RecipeProps) {


 


  const [ingredients, setIngredients] = useState(props.ingredients);
  const [newIngredient, setNewIngredient] = useState('');


  const [instructions, setInstructions] = useState(props.instructions);
  const [newInstruction, setNewInstruction] = useState('');



  


    return (

<main>
      <div className="recipe container">
        <h1>{props.name}</h1>
        <div>
          <img
            className="img-big"
            src={props.image}
          />
        </div>

        <div className="recipe-body">
          <h2>Ingredients</h2>
          <ul>
            {ingredients.map((ingredient: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined) => {
              return (
                <li>
                  {ingredient}
                </li>
              );
            })}
          </ul>

          <div className="FormGroup">
            <h3>Add an Ingredient</h3>
            <label htmlFor="newIngredient">Ingredient: </label>


            <input
              type="text"
              id="newIngredient"
              placeholder="2 cups of spinach"
              value={newIngredient}
              onChange={(e) => {
                setNewIngredient(e.target.value);
              }}
            />

          <button
              className="FormButton"
              onClick={() =>
                setIngredients([...ingredients, newIngredient])
              }
              
            >
              Add Ingredient
            </button>
        </div>
        </div>

        <div className="recipe-body">
          <h2>Preperation</h2>
          <ol id="instructions">
        {instructions.map((instruction: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined) => {
          return (
            <li>{instruction}</li>
          );
        })}
      </ol>



      <div >
            <h3>Add an Instruction</h3>
            <label htmlFor="newIngredient">Instruction: </label>


            <input
              type="text"
              id="newIngredient"
              placeholder="2 cups of spinach"
              value={newInstruction}
              onChange={(e) => {
                setNewInstruction(e.target.value);
              }}
            />

          <button
              className="FormButton"
              onClick={() =>
                setInstructions([...instructions, newInstruction])
              }
              
            >
              Add Instruction
            </button>
        </div>




        </div>

      </div>
    
    </main>


    )};
