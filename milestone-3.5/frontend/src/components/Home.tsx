import RecipePreview from "./RecipePreview";
import recipeData from "../recipeData";

export default function Home() {
  return (
    <main>
      <h1>Recipes</h1>
      {recipeData.map((recipe) => (
        <RecipePreview {...recipe}
        />
      ))}
    </main>
  );
}
