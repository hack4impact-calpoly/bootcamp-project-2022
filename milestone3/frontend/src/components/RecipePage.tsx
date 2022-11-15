import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './RecipePage.css';


interface Recipe {
    name: string;
    link: string;
    desc: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  };



function RecipePage (props: Recipe) {
  
  // ingredients
  const [newIngredient, setNewIngredient] = React.useState('');
  const [allIngredients, setAllIngredients] = React.useState(props.ingredients);

  // instructions
  const [newInstruction, setNewInstruction] = useState('');
  const [allInstructions, setAllInstructions] = useState(props.instructions);

  return (
  <body>
  <main>
    
      <section>
      <div className="flex-container">
        <div>
            <img className="flex-image" src={props.image} alt="img" />
        </div>

        <div className="flex-content">
          <h1>{props.name}</h1>
          <p>{props.desc}</p>

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

export default RecipePage;