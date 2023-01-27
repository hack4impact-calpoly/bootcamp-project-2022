import './Home.css';
import Preview  from './RecipePreview';
import recipeData, { Recipe } from '../recipeData';
import { useEffect, useState } from 'react';

export default function Home() {

  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
    .then((res) => res.json())
    .then((data) => setExternalRecipes(data))
  }, [])

  return (
    <div>
      {/* header */}
      <h2>Discover easy and tasty low FODMAP recipes!</h2>
      {/* 3 cards */}
      <div className='three-cards'>
        {recipeData.map((recipe, index)=> 
          <div key={index}>
            <Preview 
              external={false}
              name={recipe.name}
              image={recipe.image}
              description={recipe.description}
              key={index} 
              ingredients={[]} 
              instructions={[]}           
              />
          </div>
        )}
        {externalRecipes.map((recipe, index)=> 
          <div key={index}>
            <Preview 
              external={true}
              name={recipe.name}
              image={recipe.image}
              description={recipe.description}
              key={index} 
              ingredients={[]} 
              instructions={[]}           
              />
          </div>
        )}
      </div>
    </div>
  );
}

