import './home.css';
import RecipePreview from '../components/recipePreview';
import recipes from "../recipeData"
import { Recipe } from '../recipeData';
import {useState, useEffect} from 'react'


function Home() {
    //connecting to hus chews api
    const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
    // [get] recipe 
    useEffect(() => {
        fetch("https://bootcamp-milestone-4.onrender.com/recipe")
          .then((res) => res.json())
          .then((data) => setExternalRecipes(data));
      }, []);
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
        
    />
    )   
)} 
        {/* <!--map for external recipes (hus chews)--> */}
        {externalRecipes.map((recipe) => (
            <RecipePreview
        name={recipe.name}
        description={recipe.description}
        image={recipe.image}
        external = {true}
    />
    )   
)}
        </div>
 </>
    )

}

export default Home;
