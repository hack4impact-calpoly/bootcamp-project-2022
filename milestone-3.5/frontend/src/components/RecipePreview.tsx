import { Link } from "react-router-dom";
import { RecipePreviewData } from "../recipeData";

//Interface adds the externalR prop for determining the recipe location
export interface RecipePreviewProps extends RecipePreviewData {
  externalR: boolean;
}
RecipePreview.defaultProps = {
  externalR: false,
};

//This renders a Recipe Preview card from the given RecipePreviewData data object
export default function RecipePreview(props: RecipePreviewProps) {
  let addr = "";
  if (props.externalR) {
    addr = "externalRecipe/" + props.name;
    addr = addr.split("(")[0]; //For 3rd API recipe that has invalid URL characters
  } else {
    addr = "recipe/" + props.name; // whatever it was before
  }
  return (
    <div className="flex-content">
      <h2>
        {/* This passes the name from the props into the link, to render the correct RecipePage */}
        <Link to={addr}>{props.name}</Link>
      </h2>
      <p>{props.description}</p>
      <img className="flex-image" src={props.image} alt={props.imgAlt} />
    </div>
  );
}
