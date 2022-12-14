import React, { useState, useEffect, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import  { Recipe } from './recipeData';
import '../App.css';


export default function RecipePage (){

    const[recipe, setRecipe] = useState<Recipe>({
        name: "",
        image: "",
        imgAltName: "",
        description: "", 
        ingredients: [],
        instructions: [],
        orig_link: "", 
        orig_link_name: "",
        buttonHref: ""
    }); 
    const {name} = useParams();

    useEffect (() => {
        window.scrollTo(0, 0)
        fetch(`http://localhost:3001/recipes/${name}`)
        .then(response => response.json()) 
        .then(recipeData => {
            setRecipe(recipeData[0])
            setAllIngredients(recipeData[0].ingredients)
            setAllSteps(recipeData[0].instructions)
            console.log(recipeData[0])})
        .catch(err => console.log(err))
    },[name]);
  
    const [newIngredient, setNewIngredient] = useState('');
    const [allIngredients, setAllIngredients] = useState(recipe.ingredients); 
    const [newStep, setNewStep] = useState('');
    const [allSteps, setAllSteps] = useState(recipe.instructions);

    const AddIngredient = () => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newIngredient })
        }
        fetch(`http://localhost:3001/recipes/${name}/ingredient`, requestOptions)
        .then(res => console.log(res));
        setAllIngredients([...allIngredients, newIngredient]);
    }
    
    const AddInstruction = () => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newStep })
        }
        fetch(`http://localhost:3001/recipes/${name}/instruction`, requestOptions)
        .then(res => console.log(res));
        setAllSteps([...allSteps, newStep]);
    }

    return(         
        <div className = "recipe-container">
                  <h2>{recipe.name}</h2>
                  <img src= {recipe.image}
                      alt= {recipe.imgAltName}
                      width="350"/>

                  <h3>ingredients</h3>
                        <ul>
                            {allIngredients.map(function(name, index) {
                                return <li key={index}>{name}</li>; 
                            })}
                        </ul>
                        <div>
                            <input placeholder= "2 cups of spinach"
                                value={newIngredient} // add newIngredient as the input's value
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    // this event handler updates the value of newIngredient
                                    setNewIngredient(e.target.value);}}
                            />
                            <button onClick ={AddIngredient}>
                                add ingredient
                            </button>
                        </div>
        
                  <h3>preparation</h3>
                        <ol>
                            {allSteps.map(function(name, index) {
                                return <li key={index}>{name}</li>; 
                            })}
                        </ol>
                        <div>
                            <input
                                placeholder= "sauté for 30 seconds"
                                value={newStep} // add newIngredient as the input's value
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    // this event handler updates the value of newIngredient
                                    setNewStep(e.target.value);
                                }}
                            />
                            <button onClick={AddInstruction}>
                                add step
                            </button>
                        </div>
                  <p>recipe from: <a href= {recipe.orig_link} target = "_blank"> {recipe.orig_link_name}</a></p>    
            </div> 
       ) 
};

