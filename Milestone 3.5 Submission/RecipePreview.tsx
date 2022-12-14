import { Link } from "react-router-dom";
import * from "Milestone 3";

interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
 

function RecipePreview(props: Recipe) {
    return (
        <div className="Box">
            <h2>
                <Link to={props.path} className="title">{props.name}</Link>
            </h2>
            <div className="para">
                <img src={props.image} alt="error loading image" className="RecipeImage" />
                <p className="paratext">{props.description}</p>
            </div>
        </div>
    );
}

export default RecipePreview