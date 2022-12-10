import './Home.css';
import React, {useState, useEffect} from 'react';
import RecipePreview from './RecipePreview';
import {Recipe} from '../recipeData';

function Home() {

  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/Recipes")
      .then((res) => res.json())
      .then((data) => setExternalRecipes(data));
  }, []);

    return (
        <main>
        <div className="menu">
            {externalRecipes.map((recipe) => 
                <RecipePreview external={true} {...recipe}/>
            )}
        </div>
      </main>
    );
}

export default Home;