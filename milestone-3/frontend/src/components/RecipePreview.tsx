import './RecipePreview.css';
import { Link } from 'react-router-dom'
import { Recipe, RecipePreviewProps } from '../recipeData';

export default function RecipePreview(recipe: RecipePreviewProps) {
    function CreateRecipeLink(recipe: RecipePreviewProps)
    {
        return recipe.ext ? "externalRecipe/" + recipe.name : "recipe/" + recipe.name  
    }

    return (
        <div>
            <div className='recipe-wrapper'>
                {/*A flexbox containing a recipe icon and name*/}
                <div className="recipe">
                    <img className="recipe-icons" src={process.env.PUBLIC_URL + recipe.image} alt = {recipe.name} />
                    <Link to={CreateRecipeLink(recipe)}><p className="recipe-text"> {recipe.name}</p></Link>
                </div>
                {/*Text under the flexbox that briefly describes the item*/}
                <div className='recipe-text'>
                    { recipe.description }
                </div>
            </div>
            
        </div>
    );
}