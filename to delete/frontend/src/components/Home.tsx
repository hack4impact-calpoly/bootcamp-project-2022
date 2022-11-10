import './home.css';
import React, {useState, useEffect} from 'react';
import RecipePreview from './RecipePreview';
import recipes from '../recipeData';

function Home() {
    return (
        <main>
        <h1>Welcome to Connor's Bakery!</h1>
        <div className="card">
          {recipes.map(recipe=> (
            <RecipePreview 
                {...recipe} />
            ))} 
        </div>
      </main>
    );
}

export default Home;