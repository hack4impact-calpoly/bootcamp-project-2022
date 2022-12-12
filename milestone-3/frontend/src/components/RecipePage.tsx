import React, { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import recipes from '../Recipedata'
import "./RecipePage.css"


interface RecipePageProps {
  external?: boolean;
	name?: string;
  description?: string;
  image?: string;
  ingredients?: string[];
  instructions?: string[]
}

RecipePage.defaultProps = {
  external: false,
  name: false,
  description: false,
  image: false,
  ingredients: false,
  instructions: false
};

export default function RecipePage(props: RecipePageProps) {
  const {id} = useParams();
  const [recipe, setrecipe]= useState(recipes.find(r => id === r.name));
  // const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    if (props.external) {
      fetch("https://bootcamp-milestone-4.onrender.com/recipe/" + id)
      .then((res) => res.json())
      .then((data) => {setrecipe(data[0])
      setAllIngredients(data[0].ingredients)
      setAllInstructions(data[0].instructions)
      });
}}, [id, props.external]);
  const [newIngredient, setNewIngredient] = useState('');
  const [allIngredients, setAllIngredients] = useState(recipe?.ingredients);
  const [newInstruction, setNewInstruction] = useState('');
  const [allInstructions, setAllInstructions] = useState(recipe?.instructions)
  const ingredient_list = allIngredients?.map((ingred) =>
    <li>{ingred}</li>
  );
  const instruction_list = allInstructions?.map((instr) =>
    <li>{instr}</li>
  );
  return(
    <div className="flex-container" >
      <div><img className="flex-image" src={recipe?.image} alt="smth"/></div>
      <div className="flex-content">
        {/* <!-- title and image --> */}
        <h1 className='recipe_name'>  {recipe?.name} </h1>
        <p>{recipe?.description}</p>
        {/* <!-- ingredients list --> */}
        <h2 className = "Ing">Ingredients</h2>
          <ul> {ingredient_list} </ul>
        
  <div className='add'> 
  <input className='input'
  placeholder="2 cups of spinach"
  value={newIngredient} // add newIngredient as the input's value
  onChange={(e: ChangeEvent<HTMLInputElement>) => {
    // this event handler updates the value of newIngredient
    setNewIngredient(e.target.value);
  }}
/>
<button onClick={() => setAllIngredients([...allIngredients ?? [], newIngredient])} className = "button">
  Add Ingredient
</button> 

</div>
  </div>
  {/* <!-- instructions list --> */}
    <h2 className = "Prep">Preparation</h2>
      <ol>
        {instruction_list}
      </ol>
     
  <div className='add2'>
    <input
  placeholder="Mix in 2 cups of spinach"
  value={newInstruction} // add new instruction
  onChange={(e: ChangeEvent<HTMLInputElement>) => {
    // update new instruction
    setNewInstruction(e.target.value);
  }}
/>
<button onClick={() => setAllInstructions([...allInstructions ?? [], newInstruction])} className = "button">
  Add Instruction
</button> 
</div>
</div>
)}


