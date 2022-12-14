import { Link } from "react-router-dom";
import './RecipePreview.css';

interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
}

// interface RecipePreviewProps extends Recipe{
//     external?: boolean;
// }

function RecipePreview(props: Recipe) {
    let path = "/recipe/" + props.name;
    // if (props.external) {
    //     path = "/externalRecipe/" + props.name;
    // }
    // else {
    //     path = "/recipe/" + props.name;
    // }
    
    return (
        <div className="gridBox">
            <h2>
                <Link to={path} className="gridTitle">{props.name}</Link>
            </h2>
            <div className="gridContent">
                <img src={props.image} alt="food" className="gridImg" />
                <p className="gridText">{props.description}</p>
            </div>
        </div>
    );
}

export default RecipePreview