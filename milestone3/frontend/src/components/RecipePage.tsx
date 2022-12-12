import './RecipePage.css';
import recipes from "../recipeData";
import { useParams } from "react-router-dom";

interface Recipe {
    name: string;
    desc: string;
    image: string;
    ingredients: string[];
    steps: string[];
    path: string,
    id: string
}

function RecipePage () {
    const { id } = useParams();
    const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === id);
    return (
        <div>
            <div className="recipeBox">
                <img src={recipe?.image} alt="food pic" className="recipeImg" />
                <div className="recipeInfo">
                    <h2 className="recipeTitle">{recipe?.name}</h2>
                    <p className="recipeText">{recipe?.desc}</p>
                    <h3 className="ingredientsTitle">Ingredients</h3>
                    <ul>
                        {recipe?.ingredients.map((ingredient) =>
                            <li>{ingredient}</li>
                        )}
                    </ul>
                </div>
            </div>

            <div className="prepBox">
                <h3 className="ingredientsTitle">Preparation</h3>
                <ol>
                    {recipe?.steps.map((step) =>
                        <li>{step}</li>
                    )}
                </ol>
            </div>
        </div>
    );
}

export default RecipePage;