import RecipePreview from "./RecipePreview";
import recipeData, { Recipe } from "../recipeData";
import "../App.css"
import{useState, useEffect} from "react";


function Home(){


    // change to API
    const[externalRecipes, setExternalRecipes] = useState<Recipe[]>([])
    useEffect(() => {
        fetch("https://bootcamp-milestone-4.onrender.com/recipe")
        .then((res) => res.json())
        .then((data) => setExternalRecipes(data))
    }, [])

    return(
        <main>
            <h1>This is my recipe site!</h1>

            {recipeData.map(recipe =>
            // internal recipes
            <RecipePreview name={recipe.name} image={recipe.image} desc={recipe.description} />
            )}
            {externalRecipes.map(recipe =>
            // external
            <RecipePreview name={recipe.name} image={recipe.image} desc={recipe.description} external/>    
                )}
        </main>
    )
}

export default Home;