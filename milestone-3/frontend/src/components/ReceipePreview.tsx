import { Link } from "react-router-dom"
import "../App.css"

export interface Preview {
    name: string;
    image: string;
    description: string;
};
  
function RecipePreview(props: Preview) {
    return (
        <div className ="recipe-section">
        <div className = "section-text">
            <Link className="recipe-name" to={`/recipe/${props.name}`}>
            {props.name}
            </Link>
            <p>{props.description}</p>
        </div>
        <img src={props.image} />
        
        </div>
    );
  }
  
export default RecipePreview;