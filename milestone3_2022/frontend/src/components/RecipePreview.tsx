import "../App.css"
import { Link } from "react-router-dom";

export interface Recipe {
    name: string;
    description: string;
    image: string;
    image2: string
    info: string[];
    intro: string;
    ingredients: string[];
    instructions: string[];
}

export default function RecipePreview(props: Recipe) {
    return (
        <div className="recipe">
            <h2>
                <Link to={"/recipes/" + props.name}>
                    {props.name}
                </Link>
            </h2>
            <div className="recipe-body">
                <img className="img-preview" src={props.image} alt="food pic"/>
                <p className="decription">
                    {props.description}
                </p>
            </div>
        </div>
    )
}