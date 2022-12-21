import { Link } from "react-router-dom";
import RecipePreview from "./recipePreview";
import recipes from "../recipeData.json";

interface Recipe {
    name: string;
    image: string;
    description: string;
    ingredients: string [];
    instructions: string [];
}

function RecipePage(props: Recipe) {
    return (
    <div>
    <h2>
        <Link to={`/recipes/${props.name}`} className="text">{props.name}</Link>
    </h2>
    <div className="sub-section">
        <img className="recipe-images-main" src={props.image} alt="picture of recipe" width="200" height="200"/>
        <p className="text">
            {props.description}
        </p>
    </div>
    <div className="sub-section">
        <strong className="text">Ingredients</strong>
        <p className="text">
            <ul>
                {props.ingredients.map(ingredient => 
                <li key={ingredient}>{ingredient}</li>)}
            </ul>
        </p>
    </div>
    
    <div className="sub-section">
        <strong className="text">Instructions</strong>
        <p className="text">
            <ol>
                {props.instructions.map(instruction =>
                <li key={instruction}>{instruction}</li>)}
            </ol>
        </p>
    </div>
    </div>);
}

export default RecipePage;