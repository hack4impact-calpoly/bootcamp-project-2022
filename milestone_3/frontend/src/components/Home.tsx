import recipes from "../recipeData"
import RecipePreview from './recipePreview';


export default function Home() {
    return (
        <main>
            <h1 className = "blink_me" >Select a Cookie!</h1>
            {/* recipes list */}
            {recipes.map(recipe => 
                <RecipePreview {...recipe}/>
            )}
        </main>
    );
}