import recipes from "../recipeData";
import "./Home.css";
import RecipePreview from "./recipePreview";

export default function Home() {
    return (
        <main className="main-content body">
            <div>
                {recipes.map((recipe) => (
                    <RecipePreview {...recipe}/>
                ))}
            </div>
            
        </main>
        
    );
}