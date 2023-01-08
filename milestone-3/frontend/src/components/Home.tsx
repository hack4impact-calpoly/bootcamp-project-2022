import './Home.css';
import Preview  from './RecipePreview';
import recipes from '../recipeData';

export default function Home() {
  return (
    <div>
      {/* header */}
      <h2>Discover easy and tasty low FODMAP recipes!</h2>
      {/* 3 cards */}
      <div className='three-cards'>
        {recipes.map((recipe, index)=> 
          <div key={index}>
            <Preview 
              name={recipe.name} 
              image={recipe.image} 
              description={recipe.description} 
              key={index}             
            />
          </div>
        )}
      </div>
    </div>
  );
}