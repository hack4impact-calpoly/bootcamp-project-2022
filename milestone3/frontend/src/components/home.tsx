import './home.css';
import RecipePreview from '../components/recipePreview';
import recipes from "../recipeData"


function Home() {
    return (
        
        <>
        <div className = "backgroundcolor hometext">
            <h3 className = "padding"> 
            {/* <!--message--> */}
            Welcome to my recipe website! Enjoy browsing through the featured menu items below. Click on any link below to find the corresponding recipe! 
            </h3>

            {recipes.map((recipe) => (
            <RecipePreview
        name={recipe.name}
        description={recipe.description}
        image={recipe.image}
        ingredients={recipe.ingredients}
        instructions={recipe.instructions} 
    />
    )   
)}
        </div>
 </>
    )

}

export default Home;
