import { Link } from "react-router-dom"
import "../App.css"

interface Recipe {
    path: string;
    name: string;
    image: string;
    desc: string;
};
  
function RecipePreview(props: Recipe) {
    return (
        <div className ="recipe-section">
        <div className = "section-text">
            <Link className="recipe-name" to={`/recipe/${props.path}`}>
            {props.name}
            </Link>
            <p>{props.desc}</p>
        </div>
        <img src={props.image} />
        
        </div>
    );
  }
  
export default RecipePreview;