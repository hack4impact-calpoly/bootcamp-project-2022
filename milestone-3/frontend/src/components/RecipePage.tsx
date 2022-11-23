import { useParams } from "react-router-dom";
import recipe_list, { Recipe } from "../recipeData";
import React, { ChangeEvent, useEffect, useState } from "react";


interface RecipePageProps {
  external?: boolean;
}


function RecipePage(props: RecipePageProps) {
  const [ingredients, setIngredients] = useState<any[]>([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [instructions, setInstructions] = useState<any[]>([]);
  const [newInstruction, setNewInstruction] = useState('');
  const [recipeCurrent, setRecipeCurrent] = useState<Recipe>(recipe_list[0])
 
  const {id} = useParams();


  useEffect(() => {

      

    if (props.external) {
        
        
        const getExternal = async () => {
            //get request for an external recipe
            let data = await fetch("https://bootcamp-milestone-4.onrender.com/recipe/" + id);
            let recipeData = await data.json();
            setRecipeCurrent(recipeData[0]);
            setIngredients([...recipeData[0].ingredients])
            setInstructions([...recipeData[0].instructions]);
        }
        getExternal();
        console.log(recipeCurrent)


    } else {
      //normal recipe
      let target = recipe_list.find(element => (element.name == id))!;
      setRecipeCurrent(target)
      setIngredients([...target.ingredients])
      setInstructions([...target.instructions])
    }
  }, [id, props.external]);


  
    return (

      <div className="entire-page">
        <h1 className="recipe-header-page main_header">{recipeCurrent.name}</h1>
        <div className="recipe-page-first">
          <img src={recipeCurrent.image} alt={recipeCurrent.name} className="big-img" />
          <div className="recipe-desc-ingr">
            <p className="card-desc-page">{recipeCurrent.description}</p>

            <div className="ingredients">
              <div className="ingredient-body">
                <h2 className="text--purple recipe-header-page main_header">
                  Ingredients
                </h2>
                <ul>
                  {ingredients.map((ingredient, i) => (
                    <li>{ingredient}</li>
                  ))}
                </ul>
          <input
            placeholder="2 cups of spinach"
            value={newIngredient} // add newIngredient as the input's value
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              // this event handler updates the value of newIngredient
              setNewIngredient(e.target.value);
            }}
          />
          <button
            onClick={() =>
              setIngredients([...ingredients, newIngredient])
            }
          >
            Add Ingredient
          </button>
              </div>
            </div>
          </div>
        </div>
        <div className="instructions">
          <h2 className="text--purple main_header recipe-header-page">
            Instructions
          </h2>
          <ol>
            {instructions.map((instruction, i) => (
              <li>{instruction}</li>
            ))}
          </ol>
          <input
            placeholder="serve and enjoy"
            value={newInstruction} // add newIngredient as the input's value
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              // this event handler updates the value of newIngredient
              setNewInstruction(e.target.value);
            }}
          />
          <button
            onClick={() =>
              setInstructions([...instructions, newInstruction])
            }
          >
            Add Ingredient
          </button>
        </div>
      </div>
    )
  } 

export default RecipePage;
