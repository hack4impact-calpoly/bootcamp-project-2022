import recipes from '../recipeData';
import { useParams } from "react-router-dom";
import './RecipePage.css'
import cafe from '../images/hotcafe.jpeg';

// all of the recipe contents
export default function RecipePage()
{
    const {id} = useParams();
    const recipe = recipes.find(recipe => recipe.name === id)
  
    if (recipe) {
    return (
        <main>
        <div className="flex-container">
            <h3> {recipe.name} </h3>
            <p> {recipe.description}</p>
            <h4>Ingredient List</h4>
            <ul>
                {recipe.ingredients.map(ingredient=> 
                    (<li>{ingredient}</li>
                ))}
            </ul>
            <h4>Instructions</h4>
            <ol>
                <h4>Iced</h4>
                {recipe.instructions1.map(instruction=>
                    (<li>{instruction}</li>
                ))}
            </ol>
             
            <ol>
                <h4>Hot</h4>
                {recipe.instructions2.map(instruction=>
                    (<li>{instruction}</li>
                ))}
            </ol>
        </div>
        </main>
    )}

    else {
        return (
            <h1>This recipe does not exist!</h1>
        )
    }
        
}