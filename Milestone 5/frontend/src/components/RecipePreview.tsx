import { Link } from "react-router-dom";
import "./RecipePreview.css"

interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
}

function RecipePreview(props: Recipe) {
    let path= "/recipe/" + props.name;
    return (
        
        <div className="Box">
            <h2>
                <Link to={path} className="subheader">{props.name}</Link>
            </h2>
            <div className="para">
                <img src={props.image} alt="error loading image" className="RecipeImage" />
                <p className="paratext">{props.description}</p>
            </div>
        </div>
    );
}

export default RecipePreview