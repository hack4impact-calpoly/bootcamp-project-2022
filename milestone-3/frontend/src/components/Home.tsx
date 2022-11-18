// cd my-app -> npm start
// {/* how to comment */}

import '../App.css';
import recipes, { Recipe } from "./recipeData";
import RecipePreview from './ReceipePreview';

// milestone 3.5
import { useState, useEffect } from "react";

function Home() {

  const [fetRecipes, setFetRecipes] = useState<Recipe[]>([])
  useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
    .then((response) => response.json())
    .then((data) => setFetRecipes(data))
  }, [])
  
  let all = [...recipes, ...fetRecipes];

  return (
    <body>
        <main>
        <p id="motto">Satisfy Your Sweet Tooth With Our Simple Recipes!</p>
        {all.map((recipe) => (
				<RecipePreview
					name={recipe.name}
					image={recipe.image}
					description={recipe.description}
				/>
			  ))}
        </main>
    </body>
  );
}

export default Home;