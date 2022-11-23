import { useParams } from 'react-router-dom';
import recipeData from '../recipeData';
import React, { useState, useEffect } from 'react';
import { RecipeExternal } from './Home';
import { Recipe } from './RecipePreview';

interface RecipePageProps {
    external?: boolean;
}

function RecipePage(props: RecipePageProps) {
    const { name } = useParams();

    const [rec, setRecipe] = useState<Recipe>({
        name: "name",
        image: "image",
        desc: "desc",
        alt: "alt",
        url: "url",
        ingredients: ["ingredients"],
        steps: ["steps"],
        source: "source"
    });

    useEffect(() => {
        if (props.external) {
            fetch(`https://bootcamp-milestone-4.onrender.com/recipe/${name}`)
                .then((res) => (res.json())) 
                .then((r) => (setRecipe({ //r[0] grabs the actual json object, we then assign its properties to a Recipe object
                   name: (typeof(r[0].name) === 'string' ? r[0].name : "Error finding recipe"),
                   image: (typeof(r[0].image) === 'string' ? r[0].image : ""),
                   desc: (typeof(r[0].description) === 'string' ? r[0].description : ""),
                   alt: (typeof(r[0].name) === 'string' ? r[0].name : ""),
                   url: (typeof(r[0].name) === 'string' ? r[0].name : ""),
                   ingredients: (Array.isArray(r[0].ingredients) ? r[0].ingredients: [""]),
                   steps: (Array.isArray(r[0].instructions) ? r[0].instructions: [""]),
                   source: `https://bootcamp-milestone-4.onrender.com/recipe/${name}`
                })))
        }         
            
        else {
            const recipe = recipeData.find(i => i.url === name); {/* Finds recipe corresponding to url */}
            if (recipe !== undefined) {
                setRecipe(recipe);
            }
        }
      }, [name, props.external]);

    const [newIngredient, setNewIngredient] = useState(''); { /* Will store user-inputted new ingredient */ } 
    const [allIngredients, setAllIngredients] = useState(rec.ingredients);
    const [newStep, setNewStep] = useState('');
    const [allSteps, setAllSteps] = useState(rec.steps);

    {/* Gets current list of ingredients, or just an empty string if the url isn't found. 
    Must use ternary operator because I can't put this after the return statement below by react hook rules */}

    if (rec === undefined) { return (<p>Page not found</p>)} {/* Returns Page Not Found if no recipe corresponds to url */}
    return (
        <body>
        <header>
            {/* Will now use recipe.[property] to grab all necessary info about the recipe */}
            <h2>{rec.name}</h2>
            <p>{rec.desc}</p>
        </header>
        <main>
            <div className="flex-container-recipes">
                <img src={rec.image} alt={rec.alt}/>
                <div className="text">
                    <p><i><b>Ingredients:</b></i></p>
                    <ul>
                        {/* Recipe ingredients stored in array, maps each step to item in list */}
                        {allIngredients.map(ing => (
                            <li>{ing}</li>
                        ))}
                    </ul>
                    {/* Left off here, not sure what it's not adding new ingredient */}
                    <input value={newIngredient} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setNewIngredient(e.target.value);
                        }}
                    />
                    <button onClick={() => setAllIngredients([...allIngredients, newIngredient])}>
                        Add Ingredient
                    </button> 
                </div>
            </div>
            <div className="flex-container-recipes">
                <div className="text steps">
                    <p><i><b>Steps:</b></i></p>
                    <ul>
                        {/* Recipe steps stored in array, maps each step to item in list */}
                        {allSteps.map(step => (
                            <li>{step}</li>
                        ))}
                    </ul>
                    <input value={newStep} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setNewStep(e.target.value);
                        }}
                    />
                    <button onClick={() => setAllSteps([...allSteps, newStep])}>
                        Add Step
                    </button>
                    <br></br>
                    <a href={rec.source} target="_blank"><u>Recipe Source</u></a>
                </div>
            </div>
        </main>
        </body>
    )
}

export default RecipePage;