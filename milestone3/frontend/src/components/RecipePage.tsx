import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './RecipePage.css';
import recipeData, {Recipe} from '../recipeData'


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
  const [allIngredients, setAllIngredients] = useState(recipe.ingredients);

  // instructions
  const [newInstruction, setNewInstruction] = useState('');
  const [allInstructions, setAllInstructions] = useState(recipe.ingredients);

  useEffect(() => {
    if (props.external) {
      fetch(`https://bootcamp-milestone-4.onrender.com/recipe/${id}`)
        .then((res) => res.json())
        .then ((data) => {
          setRecipe(data[0])
        })
    } else {
      const curr: Recipe | undefined = recipeData.find((recipe) => recipe.name === id);
      setRecipe(curr!);
    }
  }, [id, props.external]);

  useEffect(() => {
    if (recipe) {
      setAllIngredients(recipe?.ingredients)
      setAllInstructions(recipe?.instructions)
    }
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