import ramen from "./images/ramen.jpeg"
import laksa from "./images/laksa.jpeg"
import satay from "./images/satay.jpeg"
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import "./RecipePage.css";

interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  }
interface recipePageProp{
    name: string, 
    description: string,
    image: string,
    ingredients: string[];
    instructions: string[];
    external?: boolean;
}

export default function RecipeDetailed(props: recipePageProp){
    const{id} = useParams();
    const [recipe, setRecipe] = useState<Recipe>({
        name: '',
        description: '',
        image: '',
        ingredients: [],
        instructions: []
    });
    const [newIngredient, setNewIngredient] = useState('');
    const [allIngredients, setAllIngredients] = useState(recipe.ingredients);
    const [newStep, setNewStep] = useState('');
    const [allSteps, setAllSteps] = useState(recipe.instructions);

    useEffect(() => {
        console.log(`id: ${id}`);
        fetch(`http://localhost:3001/recipe/${id}/`)
          .then(res => res.json())
          .then(data => {
            setRecipe(data)
            setAllIngredients(data.ingredients)
            setAllSteps(data.instructions)
        })
    }, [props.name]);
    
    const addIngredient = () => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newIngredient })
        }
        fetch(`http://localhost:3001/recipe/${id}/ingredient`, requestOptions)
        .then(res => console.log(res));
        setAllIngredients([...allIngredients, newIngredient]);
    }

    const addStep = () => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newStep })
        }
        fetch(`http://localhost:3001/recipe/${id}/instruction`, requestOptions)
        .then(res => console.log(res));
        setAllSteps([...allSteps, newStep]);
    }
    
    const ingredient_list = allIngredients.map((ingredient) =>
    <li>{ingredient}</li>
    );
    const instruction_list = allSteps.map((step) =>
    <li>{step}</li>
    );

    let newImage; 
    if(recipe.image === "satay"){
        newImage = satay; 
    }else if(recipe.image === "laksa"){
        newImage = laksa; 
    }else if(recipe.image === "ramen"){
        newImage = ramen; 
    }else{
        newImage = recipe.image;
    }
    
    return (
        
    <section className="huffman-page"id="huffman-page">
    <body>
        <div className="max-width">
            <div className="top-sec">
                <Link to='/'>Home</Link>
                <h2 className="title">{recipe.name}</h2>
                
            </div>
            <div className="huffman-content">
                
                    <div className="col left">
                        <img src= {newImage}/>
                    </div>

                    <div className="col right">
                        <div className="first">
                            <p> 
                                <h2>INGREDIENTS</h2>
                                <ul>
                                    {ingredient_list}
                                </ul>
                            </p>

                            <div>
                                
                                <h3>Add an Ingredient</h3>
                                <label htmlFor="newIngredient">Ingredient: </label>
                                <input  
                                    placeholder = "2 cups of spinach"
                                    value={newIngredient} //add newIngredient as the input's value
                                    onChange={(e: ChangeEvent<HTMLInputElement>)=>{
                                        setNewIngredient(e.target.value);
                                        console.log(newIngredient); 
                                    }}
                                />
                                <button onClick={addIngredient}>
                                    Add Ingredient
                                </button>

                            </div>

                            <p>
                                <h2>PREPARATION</h2>
                                <ol>
                                    {instruction_list}
                                </ol>
                            </p>
                            <div>
                                <h3>Add a prep step</h3>
                                <label htmlFor="newPrep">Step: </label>
                                <input
                                    placeholder = "add 50 ml of water"
                                    value={newStep}
                                    onChange={(e: ChangeEvent<HTMLInputElement>)=>{
                                        setNewStep(e.target.value); 
                                        console.log(newStep);
                                    }}

                                />
                                <button onClick={addStep}>
                                    Add Step
                                </button>
                            </div>
                    </div>
                </div>
            </div>
            </div>
        </body>
    </section>);

}
