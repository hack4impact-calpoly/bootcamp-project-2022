import Navbar from "./components/navbar";
import {useState, ChangeEvent, useEffect} from 'react';
import Home from "./components/home";
import About from "./components/about";
import './App.css';
import recipes from "./recipeData.json"
import RecipePage from "./components/recipePage";
import {
    BrowserRouter as BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import RecipePreview from "./components/recipePreview";
import {Recipe} from "./types";

function App() {
const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);

useEffect(() => {
  fetch("https://bootcamp-milestone-4.onrender.com/recipe")
    .then((res) => res.json())
    .then((data) => setExternalRecipes(data));
},[]);

  return (
    <div>
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {recipes.map((recipe) =>(
              <Route path={`/recipe/${recipe.name}`} element={<RecipePage 
                name={recipe.name}
                description={recipe.description}
                image={recipe.image}
                ingredients={recipe.ingredients}
                instructions={recipe.instructions} />} />
            )) }
            {externalRecipes.map((recipe) =>(
              <Route path={`/externalRecipe/${recipe.name}`} element={<RecipePage 
                name={recipe.name}
                description={recipe.description}
                image={recipe.image}
                ingredients={recipe.ingredients}
                instructions={recipe.instructions}  />} />
            )) }
				    
        
        </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
