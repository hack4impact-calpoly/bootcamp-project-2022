import "../App.css"
import { Recipe } from "../recipeData";
import { Link } from "react-router-dom";

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