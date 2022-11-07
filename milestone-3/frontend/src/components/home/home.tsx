import recipes from "../../recipeData";
import RecipePreview  from "../recipepreview/recipepreview";
import "./home.css";

export const Home = () => {
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
                  <img src="images/Cooking-pana.png" alt="girl cooking" />
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
          </div>
        </div>

        <script src="index.js"></script>
      </body>
    </div>
  );
};
