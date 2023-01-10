import Preview from "./RecipePreview";
import { Link } from "react-router-dom";
import recipes from "../recipeData";


export default function RecipePage() {
    return (
        <div className="page-content">
            {/* recipe preview card */}
            <div>
                <div>
                    {recipes.map((recipe, index)=> 
                    <div key={index}>
                        <Preview 
                        name={recipe.name} 
                        image={recipe.image} 
                        description={recipe.description} 
                        key={index}             
                        />
                    </div>
                    )}
                </div>
            </div>
            {/* recipe instructions */}
            <div className="instructions">
                <div className="ingredients">
                    <p className="instruction-btn">Ingredients</p>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div className="prep">
                    <p className="instruction-btn">Preparation</p>
                    <ol>
                        <li></li> 
                    </ol>
                </div>
            </div>
        </div>
    );
}