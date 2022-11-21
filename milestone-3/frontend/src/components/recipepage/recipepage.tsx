import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./recipepage.css";

interface recipePageProps {
  name: string;
  desc: string;
  image: string;
  ingred: string[];
  instruc: string[];
}

export default function RecipePage({
  name,
  desc,
  image,
  ingred,
  instruc,
}: recipePageProps) {
  const [ingredients, setIngredients] = useState(ingred);
  const [customIngred, setCustomIngred] = useState("");
  const [instructions, setInstructions] = useState(instruc);
  const [customInstruc, setCustomInstruc] = useState("");

  function addIngredient(ingred: String){
    const requestOptions = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({newIngredient: ingred})
    }

    fetch(`http://localhost:3001/recipe/${name}/ingredient`, requestOptions)
      .then((response) => console.log("added ingredient"));
  }

  function addInstruction(instruc: String){
    const requestOptions = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({newInstruction: instruc})
    }

    fetch(`http://localhost:3001/recipe/${name}/instruction`, requestOptions)
      .then((response) => console.log("added instruction"));
  }

  return (
    <div className="container">
      <div className="recipe-wrapper">
        <div className="recipe-header">
          <div className="recipe-l">
            <img
              src={image}
              alt="quinoa fried rice"
            />
          </div>
          <div className="recipe-r">
            <h2 className="recipe-title">{name}</h2>
            <p className="recipe-descrip">{desc}</p>
          </div>
        </div>
        <div className="recipe-body">
          <div className="ingredients">
            <h3>Ingredients</h3>
            <ul className="ingredient-list">
              {ingredients.map((ingred, idx) => {
                return <li key={idx}>{ingred}</li>;
              })}
            </ul>
            <div className="ingredient-adder">
              <label>Add an ingredient</label>
              <div className="inputs">
                <input
                  type="text"
                  value={customIngred}
                  onChange={(e) => {
                    setCustomIngred(e.target.value);
                  }}
                ></input>
                <button
                  className="ingredientbtn"
                  onClick={() => {
                    setIngredients([...ingredients, customIngred]);
                    addIngredient(customIngred);
                    setCustomIngred("");
                  }}
                >
                  add
                </button>
              </div>
            </div>
          </div>
          <div className="instructions">
            <h3>Instructions</h3>
            <ol className="instruction-list">
              {instructions.map((step, idx) => {
                return <li key={idx}>{step}</li>;
              })}
            </ol>
            <div className="instruction-adder">
              <label>Add an instruction</label>
              <div className="inputs">
                <input
                  type="text"
                  value={customInstruc}
                  onChange={(e) => {
                    setCustomInstruc(e.target.value);
                  }}
                ></input>
                <button
                  className="instructionbtn"
                  onClick={() => {
                    setInstructions([...instructions, customInstruc]);
                    addInstruction(customInstruc);
                    setCustomInstruc("");
                  }}
                >
                  add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
