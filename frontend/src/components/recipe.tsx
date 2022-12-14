import React, { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useState, ChangeEvent, useEffect } from 'react';
import recipes, {Recipe} from '../recipeData';
import { useParams } from 'react-router-dom';


import './about.css';

interface RecipePageProps{
  external?:boolean
}


 
  

export default function RecipePage(props: RecipePageProps) {

  let { name } = useParams();
  const [recipe, setRecipe] = useState<Recipe>({
    name: '',
    description: '',
    image: '',
    ingredients: [],
    instructions: [],
  });


  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [newIngredient, setNewIngredient] = useState('');

  const [instructions, setInstructions] = useState(recipe.instructions);
  const [newInstruction, setNewInstruction] = useState('');


  const [ingredientIndex, setIngredientIndex] = useState(recipe.ingredients.length);
  const [instructionIndex, setInstructionIndex] = useState(recipe.instructions.length);
 

  useEffect(() => {
    // make an API call with the url param & setRecipe
      fetch("http://localhost:3001/recipe/" + name)
      .then((res) => res.json())
      .then((data) => {setIngredients(data[0].ingredients); 
                      setInstructions(data[0].instructions);
                      // console.log(data[0]);
                      setRecipe(data[0])});
  
}, [recipe.name]);


// useEffect(() => {
//   setIngredients(recipe.ingredients);
// }, [props.ingredients]); 


// useEffect(() => {
//   setInstructions(recipe.instructions);
// }, [props.instructions]); 


// useEffect(() => {
//   setIngredients(recipe?.ingredients);
//   setInstructions(recipe?.instructions);
// }, [recipe]);
 


 



  useEffect(() => {
    setIngredients(recipe.ingredients);
    setInstructions(recipe.instructions);
}, [recipe]);



    const removeIngredients = (index: number
    ) => {
      if (window.confirm("Do you want to remove this item?")) {
        fetch(
          "http://localhost:3001/recipe/" + name + "/ingredient",
          {
            method: "DELETE",
          }
        ).catch((err) => console.log(err));
        setIngredients([...ingredients.slice(0, index), ...ingredients.slice(index + 1)]);
      }
    };



      const removeInstructions = (index: number
        ) => {
          if (window.confirm("do you want to remove this item?")) {
            fetch(
              "http://localhost:3001/recipe/" + name + "/instruction",
              {
                method: "DELETE",
              }
            ).catch((err) => console.log(err));
            setInstructions([...instructions.slice(0, index), ...instructions.slice(index + 1)]);
          }
        };







      useEffect(() => {
        setIngredients(recipe?.ingredients);
        setInstructions(recipe?.instructions);
      }, [recipe]);



    
      function addIngredient() {
        fetch("http://localhost:3001/recipe/" + name + "/ingredient", 
        {method: "PUT", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({
            value: newIngredient,
            position: ingredients.length
        })})
        .catch((error:any) => console.log(error))
        setIngredients([...ingredients, newIngredient])
        setIngredientIndex(ingredients.length)
        
        // .then((res) => res.json())
        // .then((data) => setAllIngredients(data));
      }




    
      function addInstruction() {
        fetch("http://localhost:3001/recipe/" + name + "/instruction", 
        {method: "PUT", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({
            value: newInstruction,
            position: instructions.length
        })})
        .catch((error:any) => console.log(error))
        setInstructions([...instructions, newInstruction])
        setInstructionIndex(instructions.length)
      }



    return (

<main>
      <div className="recipe container">
        <h1>{recipe?.name}</h1>
        <div>
          <img
            className="img-big"
            src={recipe?.image}
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
              value={ingredientIndex+1}
              onChange={(e) => {
                setIngredientIndex(parseInt(e.target.value) - 1);
              }}
            />

      <button className="add-item" onClick={addIngredient}>
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
              value={instructionIndex+1}
              onChange={(e) => {
                setInstructionIndex(parseInt(e.target.value) - 1);
              }}
            />

       

        <button className="add-item" onClick={addInstruction}>
          Add Instruction
        </button>
        </div>




        </div>

      </div>
    
    </main>


    )};












