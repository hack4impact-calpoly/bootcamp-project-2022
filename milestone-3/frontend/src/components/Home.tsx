import site_icon from './site-icon.png'
import "./Home.css"
import { Link } from 'react-router-dom'
// import { recipes } from '../recipeData'
import RecipePreview from './RecipePreview'
import { useState, useEffect } from 'react' 
import { Recipe, RecipePreviewProps } from '../recipeData'

export default function Home() {
    // Creates an array (state variable) to store recipes drawn from MongoDB using the API defined
    // in index.ts in the backend folder. Initializes that array with an empty array that stores
    // objects with the Recipe interface.
    const [recipes, setRecipes] = useState<RecipePreviewProps[]>([]);;

    // Calls on the Milestone 4 API to deliver recipe data, formats that data as an array of JSON 
    // objects, then sets the state variable for the external recipes to that array of JSON objects.
    useEffect(() => {
        fetch("http://localhost:3001/recipe")
            .then((res) => res.json())
            .then((data) => setRecipes(data));
    }, []);

    // Creates an array (state variable) to store any external recipes drawn from the Hu's Chews API.
    // Initializes that array with an empty array that stores objects with the Recipe interface, 
    // to be populated soon.
    const [externalRecipes, setExternalRecipes] = useState<RecipePreviewProps[]>([]);
    
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
                    {recipes.map((recipe) => (<RecipePreview {...recipe} ext = {false} />))}
                    {externalRecipes.map((externalRecipe) => (<RecipePreview {...externalRecipe} ext = {true} />))}
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