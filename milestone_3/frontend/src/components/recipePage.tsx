import { useParams } from "react-router-dom";
import recipes, { Recipe } from "../recipeData";
import "./recipePage.css";
import { Link } from "react-router-dom";

const RecipePage = () => {
  const { id } = useParams();
  let i = recipes.findIndex((x) => x.name === id);

  return (
    <p>
      <img
        className="recipe_img"
        src={recipes[i].image}
        alt={recipes[i].name}
      />

      <div className="recipe_section">
        <p className="recipe_text">{recipes[i].description}</p>
      </div>
      <p className="recipe_text">
        Ingredients
        <ul>
        {recipes[i].ingredients.map(function (name, index) {
          return <li key={index}>{name}</li>;
        })}
        </ul>
        <p className="recipe_text">Procedure</p>
        <ol className = "recipe_text">
        {recipes[i].instructions.map(function (name, index) {
          return <li key={index}>{name}</li>;
        })}
        </ol>
      </p>
    </p>
  );
};

export default RecipePage;
