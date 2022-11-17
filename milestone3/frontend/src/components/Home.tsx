import './Home.css';
import React, {useState, useEffect} from 'react';
import RecipePreview from './RecipePreview';
import recipes, {Recipe} from '../recipeData';

function Home() {

  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
  
  useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
      .then((res) => res.json())
      .then((data) => setExternalRecipes(data));
  }, []);

    return (
        <main>
        <h1>Welcome to Connor's Bakery!</h1>
        <div className="menu">
            {recipes.map((recipe) => 
                <RecipePreview external={false} {...recipe}/>
            )}
        </div>
        <div className="menu">
            {externalRecipes.map((recipe) => 
                <RecipePreview external={true} {...recipe}/>
            )}
        </div>
      </main>
    );
}

export default Home;