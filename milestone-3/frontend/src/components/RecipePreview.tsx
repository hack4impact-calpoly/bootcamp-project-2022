
import React from 'react';
import './recipePreview.css'
import { Link } from 'react-router-dom';


interface Recipe {
    id:string;
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  }

interface RecipePreviewProps extends Recipe {
    external: boolean;
    
  }

 
export default function RecipePreview(props: RecipePreviewProps) {
    let address = "";
    if (props.external) {
      address = "externalRecipe/" + props.name;
    } else {
      address = "recipe/" + props.name; // whatever it was before
    }
  return (
    <div className='recipe' >
        <Link to={address}>{props.name}</Link>
        {/* <Link to={`recipe/${recipe.id}`}>   */}
        <img src={props.image} alt="img" />
        <div className="recipe-info">
            <h3>{props.name}</h3>
        </div>
        <div className="overview">
            <h3>{props.name}</h3>
            {props.description}
        </div>
        {/* </Link>   */}
	</div>
  );
}
