import "./home.css";
import RecipePreview from "./RecipePreview";
import recipes from "../recipeData";
export default function Home()
{
    return (
    <div className="home">
        <div className="intro">
        <h1> Milestone 3 </h1>
            <h2>Check them out</h2>
        </div>
            <div className="cards"> 
                {recipes.map(recipe =>
                    <RecipePreview name = {recipe.name} image={recipe.image} description={recipe.desc} alternate={recipe.alt} />
                )};
            </div>
    </div>
    );
}