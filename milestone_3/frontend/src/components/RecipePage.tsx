import { useParams } from "react-router-dom";
import recipes from "../recipeData"

export default function RecipePage() {
    const { id } = useParams();
    let recipe = recipes.find(x => x.name === id);
    
    if (recipe != undefined) {
        return (
            <div>
            <main>
    <div className="flex-container">
      <div>
        <img className="flex-image" src={recipe.image} alt={recipe.name}></img>
            
        </div>
      <div className="flex-content">
        {/* <!-- title and image --> */}
        <h1>{recipe.name}</h1>
        <p>{recipe.description}</p>
        {/* <!-- ingredients list --> */}
        <h2>Ingredients</h2>
        <ul>
            {recipe.ingredients.map((ingredient) => (
                <li>{ingredient}</li>
            ))}
        </ul>
      </div>
    </div>
    {/* <!-- instructions list --> */}
    <h2>Directions</h2>
    <ol>
    {recipe.instructions.map((instruction) => (
                <li>{instruction}</li>
            ))}
    </ol>
</main>
    </div>
        );
    }
    
    // id doesnt exist
    else { 
        return (
            <div>
            <p>error</p>
            </div>
        );
    }
}