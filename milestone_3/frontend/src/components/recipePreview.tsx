import "./recipePreview.css";
import { RecipePreviewData } from "../recipeInterface";
import { Link } from "react-router-dom";

export interface RecipePreviewProps extends RecipePreviewData {
  //include everything from recipe + external property
  external?: boolean;
}
// RecipePreview.defaultProps = {
//   external: false,
// };

export default function RecipePreview(props: RecipePreviewProps) {
  // let address = "";
  // if (props.external) {
  //   address = "/externalRecipe/" + props.name;
  // } else {
  //   address = "/recipe/" + props.name;
  // }
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <div className="card">
      <Link className="title-container" to={"/recipe/" + props.name}>
        <h2 className="card-title"> {props.name} </h2>
      </Link>
      <div className="card-body">
        <img className="img-small" src={props.image} alt={props.name} />
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}
