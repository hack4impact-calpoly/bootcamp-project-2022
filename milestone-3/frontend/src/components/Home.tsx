import './Home.css';
import Preview  from './RecipePreview';
import { Recipe } from '../recipeData';
import { useEffect, useState } from 'react';

export default function Home() {

  const [myRecipes, setMyRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    fetch("http://localhost:3001/recipe")
    .then((res) => res.json())
    .then((data) => setMyRecipes(data))
    .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {/* header */}
      <h2>Discover easy and tasty low FODMAP recipes!</h2>
      {/* 3 cards */}
      <div className='three-cards'>
        {myRecipes.map((recipe, index)=> 
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
      </div>
    </div>
  );
}

