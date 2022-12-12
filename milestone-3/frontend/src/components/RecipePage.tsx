import { Recipe } from "../recipeData";
import './RecipePage.css'

export default function RecipePage(recipe: Recipe ) {

    return(
        <div className="ingredients-recipe-layout">
            {/*Flexbox with a list of ingredients, drawn from recipeData.ts*/}
            <div className="ingredients-or-recipe">
                <h2>Ingredients</h2>
                <ul className="ingredients-or-recipe-text">
                    {
                    recipe.ingredients.map((ingredient) => (<li>{ingredient}</li>))
                    }
                </ul>
            </div>
            {/*Flexbox with a list of steps, drawn from recipeData.ts*/}
            <div className="ingredients-or-recipe">
                <h2>Recipe</h2>
                <ol className="ingredients-or-recipe-text">
                    {
                    recipe.instructions.map((step) => (<li>{step}</li>))
                    }
                </ol>
            </div>
        </div>
    )
}