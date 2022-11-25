import RecipePreview from "./RecipePreview";
import recipeData from "/Users/eeshanwalia/Documents/HforImpact/bootcamp-project-2022/my-app/src/recipeData.json";
import "../App.css"

function Home(){
    return(
        <main>
            <h1>This is my recipe site!</h1>
            {recipeData.map(recipe =>
            <RecipePreview name={recipe.name} image={recipe.image} desc={recipe.desc} />
            )}
        </main>
    )
}
export default Home;