import Navbar from "./Navbar";
import RecipePreview from "./RecipePreview";
import recipeData from "../recipeData";

function Home() {
    return(
    <body>
        <header>
            <h1>Today's Sweets</h1>
            <p><i>Find your favorite baking recipes</i></p>
        </header>
        <main>
            <RecipePreview name={recipeData[0].name} image={recipeData[0].image} desc={recipeData[0].desc} alt={recipeData[0].alt} ingredients={recipeData[0].ingredients} steps={recipeData[0].steps} source={recipeData[0].source}/>
            <RecipePreview name={recipeData[1].name} image={recipeData[1].image} desc={recipeData[1].desc} alt={recipeData[1].alt} ingredients={recipeData[0].ingredients} steps={recipeData[0].steps} source={recipeData[0].source}/>
            <RecipePreview name={recipeData[2].name} image={recipeData[2].image} desc={recipeData[2].desc} alt={recipeData[2].alt} ingredients={recipeData[0].ingredients} steps={recipeData[0].steps} source={recipeData[0].source}/>
        </main>
    </body>
    )
}

export default Home;