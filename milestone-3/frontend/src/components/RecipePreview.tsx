import './RecipePreview.css';
import { Link } from "react-router-dom";
import { Recipe } from '../recipeData';

interface PreviewProps extends Recipe {
    external: boolean;
  }

export default function Preview(props: PreviewProps) {

    let address = "";
    if (props.external) {
        address = "externalRecipe/" + props.name;
    } else {
        address = "recipe/" + props.name; 
    }
    
    return (
        <div>
            <div className="cards" >
                <img className="card-img" src={props.image} />
                <div className="card-body">
                    <Link to={address} className="button">{props.name}</Link>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}