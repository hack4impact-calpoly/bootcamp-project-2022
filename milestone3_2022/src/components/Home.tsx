import RecipePreview from "./RecipePreview";
import recipes from "../recipeData";
import "../App.css"

export default function Home() {
  return (
    <main className="recipes">
      {recipes.map((recipe) => (
        <RecipePreview {...recipe}/>
      ))}
    </main>
  );
}