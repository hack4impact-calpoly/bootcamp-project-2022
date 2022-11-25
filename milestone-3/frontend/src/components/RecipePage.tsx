
import React, { useEffect, useState } from 'react';
import './RecipePage.css'
import { recipes } from '../recipeData'; 

import { useParams } from "react-router-dom";

interface Recipe {
    id:string | undefined;
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  }

interface RecipePageProps {
    external?: boolean;
      // other props
  }


export default function RecipePage(props: RecipePageProps) {
   const [recipe, setRecipe]=useState({id:"", name:"", description:"", image:"", ingredients:[], instructions:[]})
   const [newIngredient, setNewIngredient] = useState('')
//    const [allIngredients, setAllIngredients] = useState(props.ingredients);
//    const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);

   const { id } = useParams();
 
//    useEffect(() => {
//     const myRecipe:any = recipes.find((recipe:Recipe)=>recipe.id===id)
//     setRecipe(myRecipe)
//    }, [id])
    


   // setState and useParams
	useEffect(() => {
        if (props.external) {
          // make an API call with the url param & setRecipe
          fetch("https://bootcamp-milestone-4.onrender.com/recipe/" +id?.replace(/ /g,"%20"))
         .then((res) => res.json())
         .then((data) => setRecipe(data[0]));
       
            } else {
          
          // query all of your recipe data for the recipe you want & setRecipe
          const myRecipe:any = recipes.find((recipe:Recipe)=>recipe.name===id)
          setRecipe(myRecipe)
        }
      }, [id, props.external]);
        // return (...)
    
   
//    function addIngredient() {
//     setAllIngredients([...allIngredients, newIngredient])
//   }
console.log(recipe, "^^^^^^^^^^^^^^^^^")
  
//   console.log(externalRecipes,"--------------->>>")
  return (
    <div className='recipe_page' >
      <header>
        <h1>    {recipe.name}  </h1>
      </header>
        <div className="container">

            <section id='left_section'>
                <img src={recipe.image} alt="img" />
            </section>
            <section id='right_section'>
                <h3>Description</h3>
                <p>{recipe.description}</p>
                <h3>Ingredients</h3>
                <ul id="description">
                {recipe.ingredients.map((ingredient:string)=>
                    <li>{ingredient}</li>
                )}
                </ul>
                <input
                    placeholder="2 cups of spinach"
                    value={newIngredient} // add newIngredient as the input's value
                    onChange={(e: any) => {  //ChangeEvent<HTMLInputElement>
                        // this event handler updates the value of newIngredient
                        setNewIngredient(e.target.value);
                    }}
                    />
                {/* <button onClick={addIngredient}>
                    Add Ingredient
                </button> */}
                <h3>Method</h3>
                <ol>
                {recipe.instructions.map((instruction:string)=>
                    <li>{instruction}</li>
                )} 
                </ol>
            </section>
        </div>
	  </div>
  );
}
