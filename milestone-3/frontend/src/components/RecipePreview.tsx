import '../App.css'
import {Recipe} from '../recipeData';
import { Link } from "react-router-dom";

interface RecipePreviewProps extends Recipe {
  external: boolean;
}

function RecipePreview(props: RecipePreviewProps) {
  let address = "";
  if (props.external) {
    address = "externalRecipe/" + props.name;
  } else {
    address = "recipe/" + props.name; // whatever it was before
  }

  const id = props.name
  // console.log(props.image)
    return(
    
    <div className="recipe-home">
    <Link to={`/recipe/${props.name}`}>  <h2 className="recipe-header">{props.name}</h2></Link>

    <div className="recipe-card">
      <img
        src={props.image}
        className="small-img"
        alt={props.name}
      />
      <p className="card-desc-home">{props.description} </p>
       

    </div>
  </div>
    );
}

export {RecipePreview}
