import RecipePreview from "./RecipePreview";
import recipeData, { Recipe } from "../recipeData";
import "../App.css"
import{useState, useEffect} from "react";


// interface Recipe {
//     name: string,
//     image: string,
//     description: string
// }

function Home(){

    
    // this function pulls the data from the api for RecipePreview
    const[externalRecipes, setExternalRecipes] = useState<Recipe[]>([])
    const[allRecipes, setAllRecipes] = useState<Recipe[]>([])
    useEffect(() => {
        fetch("https://bootcamp-milestone-4.onrender.com/recipe")
        .then((res) => res.json())
        .then((data) => setExternalRecipes(data))
    }, [])
    useEffect(() => {
        fetch("http://localhost:3005/recipe")
          .then((res) => res.json())
          .then((data) => setAllRecipes(data));
      }, []);

    return(
        <main>
            <h1>This is my recipe site!</h1>

            {allRecipes.map(recipe =>
            // calls dependencies from state variable
            <RecipePreview name={recipe.name} image={recipe.image} desc={recipe.description} />
            )}
            {externalRecipes.map(recipe =>
            <RecipePreview name={recipe.name} image={recipe.image} desc={recipe.description} external/>    
                )}
        </main>
    )
}

export default Home;