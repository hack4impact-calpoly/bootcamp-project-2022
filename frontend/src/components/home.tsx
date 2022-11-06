import "./home.css";
import RecipePreview from "./recipePreview";
import recipes from "../recipeData";
import "./home.css"

// home component
export default function Home() {
  return (
    <main>
      <h1>Welcome to Tarini's Cookbox!</h1>
      {recipes.map((recipe: { name: any; description: any; image: any; }) => (
        <RecipePreview
          name={recipe.name}
          description={recipe.description}
          image={recipe.image}
        />
      ))}
    </main>
  );
}