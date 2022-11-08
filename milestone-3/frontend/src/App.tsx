import "./App.css";
import RecipePreview from "./components/RecipePreview";
import Navigation from "./components/Navigation";
import recipeData from "./recipeData.json";

function App() {
  return (
    <body>
      <Navigation />
      <main>
        <div className="content">
          <h1>Recipes</h1>
          {recipeData.map((x) => (
            <RecipePreview name={x.name} desc={x.desc} link={x.link} />
          ))}
        </div>
      </main>
    </body>
  );
}

export default App;
