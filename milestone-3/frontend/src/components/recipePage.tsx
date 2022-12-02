import './recipePage.css'
import recipes, {Recipe} from "../recipeData"
import { useParams } from 'react-router-dom';
import RecipePreview from "./recipePreview";
import React, { ChangeEvent, useEffect, useState } from 'react';

interface RecipePageProps {
    external?: boolean;
      // other props
  }


export default function RecipePage(props: RecipePageProps) {
    
  
    let {name} = useParams();
    //let recipe = recipes.find(x => x.name === name);

    const [recipe, setRecipe] = useState<Recipe>({
        name: "",
        description: "",
        image: "",
        ingredients: [],
        instructions: [],
    }) ;


    const [newIngredient, setNewIngredient] = useState('');

    const [allIngredients, setAllIngredients] = useState(recipe === undefined ? [] : recipe.ingredients);

    const [newInstruction, setNewInstruction] = useState('');

    const [allInstructions, setAllInstructions] = useState(recipe === undefined ? [] : recipe.instructions);

 
   
    // setState and useParams
	useEffect(() => {
        if (props.external) {
          // make an API call with the url param & setRecipe
            fetch("https://bootcamp-milestone-4.onrender.com/recipe/" + name)
            .then((res) => res.json())
            .then((data) => {setAllIngredients(data[0].ingredients); 
                            setAllInstructions(data[0].instructions);
                            console.log(data[0]);
                            setRecipe(data[0])});
        } else {
          // query all of your recipe data for the recipe you want & setRecipe
          let find_recipe = recipes.find(x => x.name === name);
          setAllIngredients(find_recipe === undefined ? [] : find_recipe.ingredients); 
        setAllInstructions(find_recipe === undefined ? [] : find_recipe.instructions);
            if(find_recipe) setRecipe(find_recipe);
        }
      }, [recipe.name, props.external]);



      useEffect(() => {
          // make an API call with the url param & setRecipe
            fetch("http://localhost:3001/recipe/" + name)
            .then((res) => res.json())
            .then((data) => {setAllIngredients(data[0].ingredients); 
                            setAllInstructions(data[0].instructions);
                            // console.log(data[0]);
                            setRecipe(data[0])});
        
      }, [recipe.name]);

      
    


      function addIngredient() {
        fetch("http://localhost:3001/recipe/" + name + "/ingredient", 
        {method: "PUT", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({
            value: newIngredient,
            position: allIngredients.length
        })})
        .catch((error:any) => console.log(error))
        setAllIngredients([...allIngredients, newIngredient])
        
        // .then((res) => res.json())
        // .then((data) => setAllIngredients(data));
      }

      function addInstruction() {
        fetch("http://localhost:3001/recipe/" + name + "/instruction", 
        {method: "PUT", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({
            value: newInstruction,
            position: allInstructions.length
        })})
        .catch((error:any) => console.log(error))
        setAllInstructions([...allInstructions, newInstruction])
        
        // .then((res) => res.json())
        // .then((data) => setAllIngredients(data));
      }
    // function handleChange(event: ChangeEvent<HTMLInputElement>) {
    //     setNewIngredient(event.currentTarget.value);
    //   }


    return (
    <div>
        
    <div className = "page-of-recipe1">
        <h2> <a className = "recipe-name">{recipe.name}</a> </h2>
        <div className = "recipe-body">
            <div className = "recipe-contents">
                <img className = "image" src={recipe.image} alt="img"/>

                <ul>
                <h2>Ingredients</h2>
                
                {allIngredients.map((name, index) => {
                    return <li key={index}>{name}</li>;
                })}
                
                <input
                    placeholder="2 cups of spinach"
                    value={newIngredient} // add newIngredient as the input's value
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    // this event handler updates the value of newIngredient
                    setNewIngredient(e.target.value);
                    }}
                />
                    

                <button onClick={addIngredient}>
                Add Ingredient
                </button>
            
                </ul>
           
                <ol>
                    <h2>Directions</h2>
                    {allInstructions.map(function(name, index) {
                    return <li key={index}>{name}</li>;
                    })}

                <input
                    placeholder="Stir pot"
                    value={newInstruction} // add newIngredient as the input's value
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    // this event handler updates the value of newIngredient
                    setNewInstruction(e.target.value);
                    }}
                />

                <button onClick={addInstruction}>
                Add Instruction
                </button>


                </ol>
            </div>
        </div>
    </div>
    </div>

        );
}

RecipePage.defaultProps = {
    external: false,
  };