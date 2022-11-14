import { useParams } from "react-router-dom";
import recipes from '../recipeData';

export default function RecipePage() {
    let param = useParams();
    let recipe = recipes.find((r) => r.path === param.path);
    console.log(recipe);
    if (recipe) {
        return (
            <body>
                <div className="intro">
                    <img className="intro-image" src={recipe.image} alt="food pic"/>
                    <h1 className="intro-title">{recipe.name}</h1>
                    <p className="intro-info">
                        <br>{recipe.info.map((i) => (<li>{i}</li>))}</br>
                    </p>
                </div>
                <div className="flex-container">
                    <div className="flex-content">
                        <h2 className="label">Ingredients</h2>
                        <ul>
                            {recipe.ingredients.map((i) => (<li>{i}</li>))}
                        </ul>
                        <h2 className="label">Instructions</h2>
                        <ol>
                            {recipe.instructions.map((instr) => (<li>{instr}</li>))}
                        </ol>
                    </div>
                </div>
            </body>
        );
    } else {
        return (
            <div></div>
        )
    }
}