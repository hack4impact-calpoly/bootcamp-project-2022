import React from "react";
import "./recipePreview.css"
import { Link } from "react-router-dom";
import {Recipe} from "../recipeData";

/*
interface RecipePreviewProps extends Recipe {
  // The extends keyword means that the props include everything
  // from Recipe, as well as the new baseURL prop
    external: boolean;
  }
*/

function RecipePreview(props: Recipe) {
/*  let address = "";
  if (props.external) {
    address = "externalRecipe/" + props.name;
  } else {
    address = "recipe/" + props.name; // whatever it was before
  }
*/

const id = props.name

return(
    <div className="recipe-home">

    <Link to={address}> <h2 className="recipe-header">{props.name}</h2>
    </Link>

    <div className="recipe">
      <img
          src={props.image}
          className="food-preview"
          alt={props.altDesc}
      />
          <p className="card-desc-home">{props.description}</p>
    </div>
    </div>
  )

}
export default RecipePreview;
