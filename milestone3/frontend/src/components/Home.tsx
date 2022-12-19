import { homedir } from "os"
import { Link } from 'react-router-dom';
import RecipePreview from './recipePreview';
import recipes from "../recipeData";

export default function Home(){
        return(
    <main>

            
        <h1 className="bighead" >  TOP 3 DISHES TO SATISFY YOUR PALATE</h1>
        {recipes.map((recipe) => (
        <RecipePreview {...recipe} />
        ))}
    </main>  
        )
}
