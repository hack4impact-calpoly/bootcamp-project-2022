import { useParams } from "react-router-dom";
import recipes, { Recipe } from "../recipeData";
import './RecipePage.css';

export default function RecipePage() {
    const { id } = useParams();
    const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === id);
    return(
        <main>
            <div className="recipe-container">
                <img className="item" src={recipe?.image} alt="good looking cornbread"/>
                <div className="recipe">
                    <h2 className="minititle">{recipe?.name}</h2>
                    <p>{recipe?.description}</p>
                    <h4 className="minititle">Ingredients</h4>
                    <ul>
                        {recipe?.ingredients.map(ingredient =>
                            <li>{ingredient}</li>)}
                    </ul>
                    <h4 className="minititle">Instructions</h4>
                    <ol>
                        {recipe?.instructions.map(instruction =>
                            <li>{instruction}</li>)}
                    </ol>
                </div>
            </div>
        </main>
    );
}