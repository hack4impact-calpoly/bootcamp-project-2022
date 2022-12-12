import React, { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useState, ChangeEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Recipe } from '../recipeData';

import './about.css';


interface RecipeProps {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  }


 
  

export default function RecipePage(props: RecipeProps) {


  const [recipe, setRecipe] = useState<Recipe>({
    name: '',
    description: '',
    image: '',
    ingredients: [],
    instructions: [],
  });
  const { name } = useParams();

  useEffect(() => {
    console.log("NAME", name)
        fetch("http://localhost:3001/recipe/" + props.name)
        .then(response => response.json())
        
                        .then((data) => {
                          setRecipe(data[0]);
                          setIngredients(data[0].ingredients);
                          setInstructions(data[0].instructions);
                          setIngredientIndex(data[0].ingredients.length);
                          setInstructionIndex(data[0].instructions.length);
                        })
},[props.name])


useEffect(() => {
  setIngredients(recipe.ingredients);
}, [props.ingredients]); 


useEffect(() => {
  setInstructions(recipe.instructions);
}, [props.instructions]); 


useEffect(() => {
  setIngredients(recipe?.ingredients);
  setInstructions(recipe?.instructions);
}, [recipe]);
 


  const [ingredients, setIngredients] = useState(props.ingredients);
  const [newIngredient, setNewIngredient] = useState('');





  const [instructions, setInstructions] = useState(props.instructions);
  const [newInstruction, setNewInstruction] = useState('');
  const [ingredientIndex, setIngredientIndex] = useState(ingredients.length);
  const [instructionIndex, setInstructionIndex] = useState(instructions.length);







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







      useEffect(() => {
        setIngredients(recipe?.ingredients);
        setInstructions(recipe?.instructions);
      }, [recipe]);



    
      const addIngredient = () => {
        const request = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ingredient: newIngredient }),
        };
        fetch(`http://localhost:3001/recipe/${name}/ingredient`, request)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
        setIngredients([...ingredients, newIngredient]);
        setIngredientIndex(ingredientIndex +1)
      };




    
      const addInstruction = () => {
        const request = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ instruction: newInstruction }),
        };
    
        fetch(`http://localhost:3001/recipe/${name}/instruction`, request)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
        setInstructions([...instructions, newInstruction]);
        setInstructionIndex(instructionIndex+1)
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














