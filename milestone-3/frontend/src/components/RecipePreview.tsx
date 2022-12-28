import React from 'react';
import './recipePreview.css'
import { Link } from 'react-router-dom';
import {Recipe} from '../recipeData';


/*interface Recipe{
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
    altDesc: string
  }
*/

function RecipePreview(props: Recipe) {
    return (
          // replace everything between the <div> & </div> tags
          // with your code from earlier milestones

      <div className="recipe-home">
        <Link to ={'recipe/${props.name'}>
        <h2 className="recipe-header">{props.name}</h2></Link>
        <div className="recipe">
          <img
          src={props.image}
          className="food-preview"
          alt={props.altDesc}  />
          <p className="card-desc-home">{props.description}</p>
        </div>
        </div>
    );
  }
export default RecipePreview;
