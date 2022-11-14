import "../App.css"
import { Recipe } from "../recipeData";

export default function RecipePreview(props: Recipe) {
    return (
        <div className="recipe">
            <h2>
                <a href={"/recipes/" + props.path}>{props.name}</a>
            </h2>
            <div className="recipe-body">
                <img className="img-preview" src={props.image} alt="food pic"/>
                <p className="decription">
                    {props.desc}
                </p>
            </div>
        </div>
    )
}