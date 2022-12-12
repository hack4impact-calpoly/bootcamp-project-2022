import './RecipePreview.css';
import { Link } from 'react-router-dom'
import { Recipe } from '../recipeData';

export default function RecipePreview(recipe: Recipe) {
    return (
        <div>
            {/*A flexbox containing a recipe icon and name*/}
            <div className="recipe">
                <img className="recipe-icons" src={process.env.PUBLIC_URL + recipe.image} alt = {recipe.name} />
                <Link to={recipe.name}><p className="recipe-text"> {recipe.name}</p></Link>
            </div>
            {/*Text under the flexbox that briefly describes the item*/}
            <div className='recipe-text'>
                { recipe.description }
            </div>
        </div>
    );
}