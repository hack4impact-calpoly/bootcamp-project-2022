import {Link} from "react-router-dom";

require('../css/RecipePreview.css')
interface Recipe {
    name: string;
    image: string;
    description: string;
    ingredients: string [];
    instructions: string [];
}

function RecipePreview(props: Recipe){
    let path = "/recipe/" + props.name;

    return(
        <div className="grid-item">
        <h2>{props.name}</h2>
        <Link to = {path}><img src = {props.image} className = "pics"/> </Link>
        <p>{props.description}</p>
        </div>
    )
}

export default RecipePreview;