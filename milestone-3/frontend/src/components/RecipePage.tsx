import recipes, {Recipe} from '../recipeData';
import { useParams } from "react-router-dom";
import './RecipePage.css'

export default function RecipePage()
{
    const {id} = useParams();
    const recipe = recipes.find(recipe => recipe.name === id)
  
    if (recipe) {

    return (
        <div className="flex-container">
            <h2> {recipe.name} </h2>
            <p> {recipe.description}</p>
            <h2>Ingredient List</h2>
            <ul>
                {recipe.ingredients.map(ingredient=> 
                    (<li>{ingredient}</li>
                ))}
            </ul>
            <h2>Instructions</h2>
            <ol>
                {recipe.instructions.map(instruction=>
                    (<li>{instruction}</li>
                ))}
            </ol>
        </div>
    )}

    else {
        return (
            <h1>This recipe does not exist!</h1>
        )
    }
        
}