import "./home.css";
import RecipePreview from "./recipePreview";
import recipes from "../recipeData.json";

export default function Home() {
  return (
    <main>
      <h1 className="text">Welcome to Arya's Best Cafe!</h1>
      {recipes.map(recipe =>
        <RecipePreview name={recipe.name} image={recipe.image} desc={recipe.description} />
    )}
    </main>
  );
}