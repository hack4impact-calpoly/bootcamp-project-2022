import React, { useState, useEffect, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import  recipeData, { Recipe } from './recipeData';
import '../App.css';


interface RecipePageProps{  
    external?: boolean; 
};
RecipePage.defaultProps = {
    external: false
};


export default function RecipePage (props: RecipePageProps){

    const {id} = useParams();
    const target = recipeData.find(recipe => recipe.name === id);
    const [recipe, setRecipe] = useState<Recipe>({
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

    const [newIngredient, setNewIngredient] = useState('');
    const [allIngredients, setAllIngredients] = useState(recipe.ingredients); 
    const [newStep, setNewStep] = useState('');
    const [allSteps, setAllSteps] = useState(recipe.instructions);

    if(!target){
        recipe.orig_link = "https://bootcamp-milestone-3.netlify.app/"
        recipe.orig_link_name = "Hu's Chews"
    }
   
    useEffect(() => {
        window.scrollTo(0, 0)
        if (props.external) {
                fetch("https://bootcamp-milestone-4.onrender.com/recipe/" + id)
                .then((data) => data.json())
                .then((r) => {setRecipe(r[0])
                setAllSteps(r[0].instructions)
                setAllIngredients(r[0].ingredients)
                });                  
        }else{
            setRecipe(recipeData.find((recipe) => recipe.name === id) || recipe)
    }}, [id, props.external]);

    useEffect(() => {
        setAllIngredients(recipe.ingredients);
        setAllSteps(recipe.instructions);
    }, [recipe]);
    
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
                            <button onClick ={() => setAllIngredients([...allIngredients, newIngredient])}>
                                Add Ingredient
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
                                placeholder= "Sauté for 30 seconds"
                                value={newStep} // add newIngredient as the input's value
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    // this event handler updates the value of newIngredient
                                    setNewStep(e.target.value);
                                }}
                            />
                            <button onClick={() => setAllSteps([...allSteps, newStep])}>
                                Add Step
                            </button>
                        </div>
                  <p>recipe from: <a href= {recipe.orig_link} target = "_blank"> {recipe.orig_link_name}</a></p>    
            </div> 
       ) 
};

