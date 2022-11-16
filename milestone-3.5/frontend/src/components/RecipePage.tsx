import React, { useState } from 'react';
import './RecipePage.css';
// import recipes from '../recipeData';
import { useParams } from 'react-router-dom';

export default function RecipePage(props: any) {
  let { name } = useParams();
  const { updateRecipes } = props;
  const [newIngredient, setNewIngredient] = useState('');
  const currentRecipe = updateRecipes.find((x: any) => x.name === name);
  const [totalIngredients, setTotalIngredients] = useState(
    currentRecipe?.ingredients
  );

  function handleChange(event: any) {
    const { id, value } = event.target;
    if (id === 'newIngredient') {
      console.log('value = ', value);
      setNewIngredient(value);
      console.log('newIngredient = ', newIngredient);
    }
  }

  function addIngredient() {
    if (newIngredient) {
      setTotalIngredients([...totalIngredients, newIngredient]);
    }
  }

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
          <div className="ingredient-box">
            <h4>Add Ingredients</h4>
            <label htmlFor="newIngredient">Ingredient: </label>
            <input
              id="newIngredient"
              placeholder="Enter Ingredients"
              value={newIngredient}
              onChange={handleChange}
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
        {currentRecipe?.instructions.map((name: any, index: any) => {
          return <li key={index}>{name}</li>;
        })}
      </ol>
    </main>
  );
}
