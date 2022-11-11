import "./recipePreview.css"
import { Link } from "react-router-dom";

interface Recipe
{
    name:string;
    image:string;
    description:string;
    alternate:string;
}


function RecipePreview(props:Recipe)
{
    return (
        <Link to={`recipe/:${props.name}`}>
            <div className="card">
                    <div className="box"><img src={props.image} alt={props.alternate} width="150" height="150" /></div>
                    <p className="box-txt">{props.name}</p>
                    <p id="subtitle">{props.description}</p>                
            </div>
        </Link>
    );
}

export default RecipePreview;