import React from 'react';
import './recipePage.css';
import recipes from '../recipeData';
import { useParams } from 'react-router-dom';

interface RecipePage{
    name: string,
    description: string,
    image: string
    ingredients: string[],
    instructions: string[]
}

export default function RecipePage() {
    const { id } = useParams();
    const recipe = recipes.find(x => x.name == id)
    if (recipe == undefined){
        return <div></div>;
    }
    return (

        <div className = " backgroundcolor">
            <h1 className = "important text"> {recipe.name} </h1>
                <br></br>
            <h2 className = "flex-container4 text"> {recipe.description} </h2>
                <br></br>
            <img className = "flex-container3 imgscales" src= {recipe.image} />    
            <h1 className = "important text"> Ingredient List </h1>
            
            
            {/* used map to change make a unordered list of all list elements for ingredients*/}

            <ul>
                {recipe.ingredients.map(ingredient => <li>{ingredient}</li>)}
            </ul>

            {/* used map to change make a unordered list of all list elements for instructions*/}
            <h1 className = "important text"> Instructions </h1>
            <ol>
                {recipe.instructions.map(instruction => <li>{instruction}</li>)}
            </ol>

        </div> 
    
    )


}


export{} // to make module?