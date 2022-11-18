import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Recipe } from "../recipeData";
import "./recipePreview.css"

interface RecipePreviewProps {
  name: string;
  description: string;
  image: string;
}

export default function RecipePreview(props: RecipePreviewProps) {
  
  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);


  useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
      .then((res) => res.json())
      .then((data) => setExternalRecipes(data));
  }, []);


  
  return (
    <div className="recipe">
      <h2 className ="recipe_header">
        <Link to={`/recipes/${props.name.toLowerCase().replace(/\s/g, "-")}`}>
          {props.name}
        </Link>
      </h2>

      <div className="recipe-body">
        <img className="img-small" src={props.image} alt={props.name} />
        <p className="text">{props.description}</p>
      </div>

    </div>
  );
}

