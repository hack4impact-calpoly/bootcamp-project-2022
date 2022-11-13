import { Link } from "react-router-dom";
import recipes from "../../recipeData";
import cookinggirl from "../../images/Cooking-pana.png";
import RecipePreview from "../recipepreview/recipepreview";
import "./home.css";
import { useEffect, useState } from "react";
import { Recipe } from "../../recipeData";

export const Home = () => {
  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setExternalRecipes(data);
      });
  }, []);
  return (
    <div>
      <body>
        <div className="main">
          <div className="container">
            <div className="main-wrapper">
              <div className="hero">
                <div className="hero-l">
                  <h1>eggie</h1>
                  <p>
                    Easy delicious recipes for your average broke college
                    student
                  </p>
                </div>
                <div className="hero-r">
                  <img src={cookinggirl} alt="girl cooking" />
                </div>
              </div>
            </div>
            <div className="recipe-cards">
              {recipes.map((rec) => {
                return (
                  <RecipePreview
                    name={rec.name}
                    desc={rec.description}
                    image={rec.image}
                  />
                );
              })}
            </div>
            <div className="recipe-cards 2">
              {externalRecipes.map((rec) => {
                return (
                  <RecipePreview
                    name={rec.name}
                    desc={rec.description}
                    image={rec.image}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <script src="index.js"></script>
      </body>
    </div>
  );
};
