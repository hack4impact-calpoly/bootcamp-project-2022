import site_icon from './site-icon.png'
import "./Home.css"
import { Link } from 'react-router-dom'
import { recipes } from '../recipeData'
import RecipePreview from './RecipePreview'
import { useState, useEffect } from 'react' 
import { Recipe } from '../recipeData'

export default function Home() {
    // Creates an array (state variable) to store any external recipes drawn from the Hu's Chews API.
    // Initializes that array with an empty array that stores objects with the Recipe interface, 
    // to be populated soon.
    const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
    
    // Calls on the API to deliver recipe data, formats that data as an array of JSON objects, 
    // then sets the state variable for the external recipes to that array of JSON objects.
    useEffect(() => {
        fetch("https://bootcamp-milestone-4.onrender.com/recipe")
            .then((res) => res.json())
            .then((data) => setExternalRecipes(data));
    }, []);

    return(
        <div className="page-card-wrapper">
            {/*A box at the top of the card with a link to the About page in it*/}
            <div className="page-card">

                {/*A flexbox containing recipe preview cards, created from the recipeData file and then
                externally from the Hu's Chews API*/}
                <div className="recipe-container">
                    {recipes.map((recipe) => (<RecipePreview {...recipe}/>))}
                    {externalRecipes.map((externalRecipe) => (<RecipePreview {...externalRecipe} />))}
                </div>
            </div>  

            {/*A site title and brief description*/}
            <div className="description-layout-wrapper">
                <div className="logo-text">
                    <span>
                        <em>that</em> easy
                    </span>
                </div>

                <div className="description-text">
                    <span>
                        Straightforward recipes for things you <em>should </em> 
                        know how to cook.
                    </span>
                </div>
            </div>
        </div>
    );
}