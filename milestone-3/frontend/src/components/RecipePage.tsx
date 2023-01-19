import recipes, { Recipe } from "../recipeData";
import './RecipePage.css';
import { useParams } from "react-router-dom";


export default function RecipePage(props: Recipe) {
    const { name } = useParams()
    const rec = recipes.find(recipe => recipe.name === name)

    return (
    <div>
        <div className="pg-content" >
            {/* recipe preview card */}
            <div>
                <div className="cards" >
                    <img className="card-img" src={rec?.image} />
                    <div className="card-body">
                        <p className="button">{rec?.name}</p>
                        <p>{rec?.description}</p>
                    </div>
                </div>
            </div>
            {/* recipe instructions */}
            <div className="prep">
                <div className="ingredients">
                    <p className="instruction-btn">Ingredients</p>
                    <ul>
                        {rec?.ingredients.map((ingredient, index)=>
                        <li key={index}>{ingredient}</li>)}
                    </ul>
                </div>
                <div className="instructions">
                    <p className="instruction-btn">Instructions</p>
                    <ol>
                        {rec?.instructions.map((instruction, index)=>
                        <li key={index}>{instruction}</li>)}
                    </ol>
                </div>
            </div>
        </div>
    </div>   
);
}
