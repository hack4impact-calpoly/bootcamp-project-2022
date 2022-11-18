import { Link } from "react-router-dom";
import './RecipePreview.css';

export default function RecipePreview({
  recipeName,
  recipeDescription,
  recipeImage
}: {
  recipeName: string;
  recipeDescription: string;
  recipeImage: string;
}) {
  return (
    <div className="recipeBox"> 
      <img src={recipeImage} alt="Pelmeni" />
      <div>
        <Link to={"/recipe/" + recipeName.toLowerCase()}>
          <h1>
            {recipeName}
          </h1>
        </Link>
        <p>
          {recipeDescription}
        </p>
      </div>
    </div>
  )
}