import React from 'react';
import '../recipeData.ts'
import './recipePreview.css'
import { Link } from 'react-router-dom';

export interface Recipe {

  name: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}

export interface RecipePreviewProps extends Recipe{
  external: boolean,
}

export default function RecipePreview(props: RecipePreviewProps) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className="dish-box">
          <img className="thumbnail" alt={props.name} src={props.image}/>
          <div className='about'>
            {/* `recipe/${props.short}` links to recipe page */}
              <h2 className="dish-title"><Link to = {`${props.external?"externalRecipe":"recipe"}/${props.name}`}>{props.name}</Link></h2>
              <h3 className="description">{props.description}</h3>
          </div>
    </div>
  );
}