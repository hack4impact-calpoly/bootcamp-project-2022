import RecipePreview from './recipePreview'
import recipes from '../recipeData';
export default function Home(){
    return(
    <main>
        {recipes.map((recipe) => (
    <RecipePreview
      name={recipe.name}
      description={recipe.description}
      image={recipe.image}
      ingredients={recipe.ingredients}
      instructions={recipe.instructions}
    />
  ))}
    
    </main>
    );
}