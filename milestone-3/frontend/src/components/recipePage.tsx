import { useParams } from "react-router-dom";
import recipes from "../recipeData";
import "./recipePage.css"

export default function RecipePage() {
    const { id } = useParams();
    let recipe = recipes.find(recipe => recipe.type === id)

    return (
        <body>
            <div className="description">
                <h1>{recipe?.name}</h1>
                <p className="description-text"> {recipe?.description} </p>
            </div>

            <main className="main-content">
                <div>
                    <img className="recipe-image" src={`../cheerios/${recipe?.image}`} alt="file path didn't work"></img>
                </div>


                <div className="ingredients">
                    <h2>Ingredients</h2>
                    <ul>
                        {recipe?.ingredients.map(function(name, index) {
                            return <li key={index}>{name}</li>;
                        })}
                    </ul>
                </div>


                <div className="preparation">
                    <h2> Preparation </h2>
                    <ol>
                        {recipe?.instructions.map(function(name, index) {
                            return <li key={index}>{name}</li>;
                        })}
                    </ol>
                </div>
            </main>
        </body>
        
    )
}