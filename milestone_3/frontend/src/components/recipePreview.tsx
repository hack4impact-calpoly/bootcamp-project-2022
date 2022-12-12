import "./recipePreview.css";
import { Recipe } from "../recipeData";
import { Link } from "react-router-dom";

interface RecipePreviewProps extends Recipe {
  //include everything from recipe + external property
  external?: boolean;
}

export default function RecipePreview(props: RecipePreviewProps) {
  let address = "";
  if (props.external) {
    address = "externalRecipe/" + props.name;
  } else {
    address = "recipe/" + props.name;
  }
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <div className="card">
      <Link className="title-container" to={address}>
        <h2 className="card-title"> {props.name} </h2>
      </Link>
      <div className="card-body">
        <img className="img-small" src={props.image} alt={props.name} />
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}
