import React, { useEffect, useState, ChangeEvent } from 'react';
import './RecipePage.css';
// import recipes from '../recipeData';
import { useParams } from 'react-router-dom';

export default function RecipePage(props: any) {
  const { name } = useParams();
  const { updateRecipes } = props;
  const currentRecipe = updateRecipes.find((x: any) => x.name === name);

  // variable for adding ingredients
  const [newIngredient, setNewIngredient] = useState('');
  const [totalIngredients, setTotalIngredients] = useState(
    currentRecipe?.ingredients
  );
  const sizeOfTotalIngredient = totalIngredients.length + 1;
  const [sizeOfIngredient, setSizeOfIngredient] = useState(
    sizeOfTotalIngredient.toString()
  );
  const [newIngredientIdx, setNewIngredientIdx] = useState(sizeOfIngredient);

  // variable for adding instruction
  const [newInstruction, setNewInstruction] = useState('');
  const [totalInstructions, setTotalInstructions] = useState(
    currentRecipe?.instructions
  );
  const sizeOfTotalInstruction = totalInstructions.length + 1;
  const [sizeOfInstruction, setSizeOfInstruction] = useState(
    sizeOfTotalInstruction.toString()
  );
  const [newInstructionIdx, setNewInstructionIdx] = useState(sizeOfInstruction);

  function addIngredient() {
    totalIngredients.splice(newIngredientIdx - 1, 0, newIngredient);
    setTotalIngredients([...totalIngredients]);
  }

  function addInstruction() {
    console.log('totalInstructions = ', totalInstructions);
    console.log('newInstruction = ', newInstruction);
    totalInstructions.splice(newInstructionIdx - 1, 0, newInstruction);
    setTotalInstructions([...totalInstructions]);
  }
  
  // update the index of totalIngredient and totalInstructions
  useEffect(() => {
    const newIndexOfIngredient = totalIngredients.length + 1;
    setSizeOfIngredient(newIndexOfIngredient.toString());
    setNewIngredientIdx(sizeOfIngredient);

    const newIndexOfInstructions = totalInstructions.length + 1;
    setSizeOfInstruction(newIndexOfInstructions.toString());
    setNewInstructionIdx(sizeOfInstruction);
  }, [
    totalIngredients,
    sizeOfIngredient,
    totalInstructions,
    sizeOfInstruction,
  ]);

  return (
    <main>
      <div className="recipes-container">
        <h1 className="recipes-title">{currentRecipe?.name}</h1>

        <div className="recipes-left">
          <div>
            <img
              className="recipes-img"
              src={currentRecipe?.image}
              alt={currentRecipe?.name}
            />
          </div>
        </div>

        <div className="recipes-content">
          <p>{currentRecipe?.description}</p>
          <h2>Ingredients</h2>
          {totalIngredients.map((item: any, index: any) => {
            return <li key={index}>{item}</li>;
          })}
          <div className="box">
            <h4>Add an Ingredients</h4>
            <label htmlFor="newIngredient">Ingredient: </label>
            <input
              id="newIngredient"
              placeholder="Enter Ingredients"
              type="text"
              value={newIngredient}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setNewIngredient(event.currentTarget.value);
              }}
            />
            <label htmlFor="ingredientPos">{` Position:(1 - ${sizeOfIngredient})`}</label>
            <input
              id="ingredientPos"
              placeholder="1"
              type="number"
              min="1"
              max={sizeOfIngredient}
              value={newIngredientIdx}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setNewIngredientIdx(event.currentTarget.value);
              }}
            />

            <br />
            <button className="add-item" onClick={addIngredient}>
              Add Ingredient
            </button>
          </div>
        </div>
      </div>

      <h2>Preparation</h2>
      <ol className="ordered-list">
        {totalInstructions.map((name: any, index: any) => {
          return <li key={index}>{name}</li>;
        })}
      </ol>
      <div className="box">
        <h4>Add an Instruction</h4>
        <label htmlFor="newInstruction">Instruction: </label>
        <input
          id="newInstruction"
          placeholder="Enter Instruction"
          type="text"
          value={newInstruction}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            console.log('newInstruction = ', newInstruction);
            setNewInstruction(event.currentTarget.value);
          }}
        />
        <label htmlFor="instructionPos">{` Position:(1 - ${sizeOfInstruction})`}</label>
        <input
          id="instructionPos"
          placeholder="00"
          type="number"
          min="1"
          max={sizeOfInstruction}
          value={newInstructionIdx}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setNewInstructionIdx(event.currentTarget.value);
          }}
        />

        <br />
        <button className="add-item" onClick={addInstruction}>
          Add Instruction
        </button>
      </div>
    </main>
  );
}
