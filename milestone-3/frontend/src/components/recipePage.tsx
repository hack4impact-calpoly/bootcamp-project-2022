import React, { ChangeEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './recipePage.css'
import './recipePreview.css'
import {useState} from 'react';

interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  }

export default function RecipePage() {
    let {name} = useParams();
    let [newIngredient, setNewIngredient] = useState('')    
    let [newInstruction, setNewInstruction] = useState('')
    //stores current list of ingredients in state variable so can re-render page
    let [allIngredients, setAllIngredients] = useState<String[]>([]);
    let [allInstructions, setAllInstructions] = useState<String[]>([]);
    
    const [recipe, setRecipe] = useState<Recipe>({
        name: '',
        description: '',
        image: '',
        ingredients: [],
        instructions: [],
    });

    const addIngredient = () => {
        fetch(`/recipe/${name}/ingredients`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ingredient: newIngredient,
            }),
        });
        setAllIngredients([...allIngredients, newIngredient]);
    };

    const addInstruction = () => {
        fetch(`/recipe/${name}/instructions`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                instruction: newInstruction,
            }),
        });
        setAllInstructions([...allInstructions, newInstruction]);
    };
    
    useEffect(() => {
        // if (props.external) {
            //make an API call with the url param & setRecipe
            fetch("http://localhost:3001/recipe/" + name)
            .then(response => response.json())
            .then(data => {setAllIngredients(data[0].ingredients);
                            setAllInstructions(data[0].instructions);
                            setRecipe(data[0])});
        // else {
        //     // query all of your recipe data for the recipe you want & setRecipe
        //     let newRecipe = recipes.find(x => x.name === name);
        //     setAllIngredients(newRecipe === undefined ? [] : newRecipe.ingredients)
        //     setAllInstructions(newRecipe === undefined ? [] : newRecipe.instructions);
        //     if(newRecipe) setRecipe(newRecipe);
        // }
    },[name])
    
    // // make sure recipe is not undefined
    // if(!recipe) {
    //     return (
    //         <div></div>
    //     )
    // }

    return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
        <div className="content">
        <img className="page-image"src={recipe.image} alt="img"/>
        <div>
            <h1 className="recipe-title"> {recipe.name}</h1>
            <p>{recipe.description}</p>
            <h2>Ingredients</h2>
            <ul>
                {allIngredients.map(function(name, index) {
                    return <li key={index}>{name}</li>;
                })}
                {/* {recipe.ingredients} */}
            </ul>
            <h2>Preparation</h2>
            <ol>
                {allInstructions.map(function(name, index) {
                    return <li key={index}>{name}</li>;
                })}
            </ol>

            {/* add new ingredient */}
            <div className="add-ingredient">
                <h3>Add an ingredient</h3>
                {/* textbox input stored newIngredient state variable  */}
                <input         
                    placeholder = "2 cups of spinach"
                    value={newIngredient} //add newIngredient as the input's value
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setNewIngredient(e.target.value)
                        console.log(newIngredient)
                    }}
                /> 
                {/* add button to append newIngredient to ingredients list */}
                {/* <button onClick={() => setAllIngredients([...allIngredients, newIngredient])}> */}
                <button onClick={addIngredient}>
                    Add Ingredient
                </button>
            </div>

            {/* add new instruction */}
            <div className="add-ingredient">
                <h3>Add an instruction</h3>
                {/* textbox input stored newInstruction state variable  */}
                <input         
                    placeholder = "Boil water"
                    value={newInstruction} //add newInstruction as the input's value
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setNewInstruction(e.target.value)
                        console.log(newInstruction)
                    }}
                /> 
                {/* add button to append newInstruction to instructions list */}
                {/* <button onClick={() => setAllInstructions([...allInstructions, newInstruction])}> */}
                <button onClick={addInstruction}>
                    Add Insruction
                </button>
            </div>
        </div>
    </div>
  );
}

RecipePage.defaultProps = {
    external: false,
  };