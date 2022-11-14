import './Home.css';
import RecipePreview from './RecipePreview';
import recipes from '../recipeData'

export default function Home()
{
    return (
        <main>
        <h2 className="flex-container">Welcome to Cafe Hope!</h2>
        {recipes.map((recipe) => (
            <RecipePreview
                name = {recipe.name}
                image1 = {recipe.image1}
                image2 = {recipe.image2}
                description = {recipe.description}
                ingredients = {recipe.ingredients}
                instructions = {recipe.instructions}
            />

        ))}
        </main>
    );
}