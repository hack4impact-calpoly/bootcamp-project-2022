import { useParams } from "react-router-dom";
import { Recipe } from "../recipeData";
import recipes from '../recipeData';

export default function RecipePage() {
    let { param } = useParams();
    let curr: Recipe | undefined = recipes.find((recipe) => recipe.path === param);
    return (
        <main className="recipe-page">
            <div className="intro">
                <img className="intro-image" src={curr?.image2} alt="food pic"/>
                <h1 className="intro-title">{curr?.name}</h1>
                <div className="intro-info">
                    {curr?.info.map((i) => (<p>{i}</p>))}
                    <br></br>
                    {curr?.intro}
                </div>
            </div>
            <div className="flex-container">
                <div className="flex-content">
                    <h2 className="label">Ingredients</h2>
                    <ul>
                        {curr?.ingredients.map((i) => (<li>{i}</li>))}
                    </ul>
                    <h2 className="label">Instructions</h2>
                    <ol>
                        {curr?.instructions.map((instr) => (<li>{instr}</li>))}
                    </ol>
                </div>
            </div>
        </main>
    );
}