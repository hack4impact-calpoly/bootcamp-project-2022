
import React from 'react';
import './recipePreview.css'
import { Link } from 'react-router-dom';

 
export default function RecipePreview(recipe:any) {
//   const { id } = useParams();
//   console.log(".........", id)
  return (
    <div className='recipe' >
      
        <Link to={`recipe/${recipe.id}`}>  
        <img src={recipe.image} alt="img" />
        <div className="recipe-info">
            <h3>{recipe.name}</h3>
        </div>
        <div className="overview">
            <h3>{recipe.name}</h3>
            {recipe.description}
        </div>
        </Link>  
	</div>
  );
}
