import './RecipePreview.css';
import { Link } from 'react-router-dom'
import { Recipe } from '../recipeData';

export default function RecipePreview({name, description, image}: Recipe) {
    return (
        <div>
            <div className="recipe">
                <img className="recipe-icons" src={process.env.PUBLIC_URL + image} alt = {name} />
                <Link to={"/"}><p className="recipe-text"> {name}</p></Link>
            </div>
            <div className='recipe-text'>
                { description }
            </div>
        </div>
    );
}