// cd my-app -> npm start
// {/* how to comment */}

import '../App.css';
import recipes, { Recipe } from "./recipeData";
import RecipePreview from './ReceipePreview';

// milestone 3.5
import { ChangeEvent, useState, useEffect } from "react";

function Home() {

  const [fetRecipes, setFetRecipes] = useState<Recipe[]>([])
  useEffect(() => {
    fetch("http://bootcamp-milestone-4.onrender.com/recipe")
    .then((response) => response.json())
    .then((data) => setFetRecipes(data))
  }, [])

  return (
    <body>
        <main>
        <p id="motto">Satisfy Your Sweet Tooth With Our Simple Recipes!</p>
        {recipes.map((recipe) => (
				<RecipePreview
					name={recipe.name}
					image={recipe.image}
					description={recipe.description}
				/>
			  ))}

        {fetRecipes.map((fr) => (
				<RecipePreview
					name={fr.name}
					image={fr.image}
					description={fr.description}
				/>
			  ))}
        </main>
    </body>
  );
}

export default Home;