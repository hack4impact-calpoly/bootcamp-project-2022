import "./recipePreview.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Recipe } from "../recipeData";

function RecipePreview(props:Recipe)
{
    // const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
    // useEffect(() => {
    //     fetch("https://bootcamp-milestone-4.onrender.com/recipe")
    //       .then((res) => res.json())
    //       .then((data) => setExternalRecipes(data));
    //   }, []);
      
    return (
        <Link to={`recipe/:${props.name}`}>
            <div className="card">
                    <div className="box"><img src={props.image} /></div>
                    <p className="box-txt">{props.name}</p>
                    <p id="subtitle">{props.description}</p>                
            </div>
        </Link>
    );
}

export default RecipePreview;