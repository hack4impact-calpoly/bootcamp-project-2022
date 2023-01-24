import './RecipePage.css';
import recipes from "../recipeData";
import { useParams } from "react-router-dom";

interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
    path: string,
    id: string
}

function RecipePage () {
    const { id } = useParams();
    const recipe: Recipe | undefined = recipes.find(recipe => recipe.id === id);
    return (
        <div>
            <div className="Box">
                <img src={recipe?.image} alt="error loading image" className="RecipeImage" />
                <div className="para">
                    <h2 className="Subheader">{recipe?.name}</h2>
                    <p className="paratext">{recipe?.description}</p>
                    <h3 className="Ingredients">Ingredients</h3>
                    <ul>
                        {recipe?.ingredients.map((ingredient) =>
                            <li>{ingredient}</li>
                        )}
                    </ul>
                </div>
            </div>

            <div className="Instructions">
                <h3 className="Ingredients">Preparation</h3>
                <ol>
                    {recipe?.instructions.map((instruction) =>
                        <li>{instruction}</li>
                    )}
                </ol>
            </div>
        </div>
    );
}

export default RecipePage;