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
  const [ingredientIndex, setIngredientIndex] = useState(ingredients.length);
  const [instructionIndex, setInstructionIndex] = useState(instructions.length);




  const addIngredients = (
  ) =>{
    if(newIngredient != "")
    {
      setIngredients([...ingredients.slice(0, ingredientIndex), newIngredient, ...ingredients.slice(ingredientIndex)]);
      setNewIngredient("");
      setIngredientIndex(ingredientIndex+1)
    }
  }



  const addInstructions = (
    ) =>{
      if(newInstruction != "")
      {
        setInstructions([...instructions.slice(0, instructionIndex), newInstruction, ...instructions.slice(instructionIndex)]);
        setNewInstruction("");
        setInstructionIndex(instructionIndex+1)
      }
    }



    const removeIngredients = (index: number
    ) => {
      if (window.confirm("Do you want to remove this item?")) {
        setIngredients([...ingredients.slice(0, index), ...ingredients.slice(index + 1)]);
      }
    };


    const removeInstructions = (index: number
      ) => {
        if (window.confirm("do you want to remove this item?")) {
          setInstructions([...instructions.slice(0, index), ...instructions.slice(index + 1)]);
        }
      };


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
            {ingredients.map((ingredient: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined, index) => {
              return (
                <li
                    key={index}
                    onClick={() =>
                      removeIngredients(index)
                    }
                  >
                    {ingredient}
                  </li>
              );
            })}
          </ul>

          <div>
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

            <input
              type="number"
              id="position"
              placeholder="1"
              min="1"
              max={ingredients.length + 1}
              value={ingredientIndex + 1}
              onChange={(e) => {
                setIngredientIndex(parseInt(e.target.value) - 1);
              }}
            />

          <button
          
          onClick={() =>
            addIngredients()
          }
        >
          Add Ingredient
        </button>
        </div>
        </div>

        <div className="recipe-body">
          <h2>Preperation</h2>
          <ol id="instructions">
        {instructions.map((instruction: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined, index) => {
          return (
            <li
            key={index}
            onClick={() =>
              removeInstructions(index)
            }
          >
            {instruction}
          </li>
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

            <input
              type="number"
              id="position"
              placeholder="1"
              min="1"
              max={instructions.length + 1}
              value={instructionIndex + 1}
              onChange={(e) => {
                setInstructionIndex(parseInt(e.target.value) - 1);
              }}
            />

          <button
          onClick={() =>
            addInstructions()
          }
        >
          Add Instruction
        </button>
        </div>




        </div>

      </div>
    
    </main>


    )};
