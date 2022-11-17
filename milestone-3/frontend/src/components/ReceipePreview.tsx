import { Link } from "react-router-dom"
import "../App.css"

interface Preview {
    name: string;
    image: string;
    desc: string;
};
  
function RecipePreview(props: Preview) {
    return (
        <div className ="recipe-section">
        <div className = "section-text">
            <Link className="recipe-name" to={`/recipe/${props.name}`}>
            {props.name}
            </Link>
            <p>{props.desc}</p>
        </div>
        <img src={props.image} />
        
        </div>
    );
  }
  
export default RecipePreview;