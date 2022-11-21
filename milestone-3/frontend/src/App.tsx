import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/navbar";
import { Home } from "./components/home/home";
import "./App.css";
import About from "./components/about/about";
import RecipePage from "./components/recipepage/recipepage";
import recipes from "./recipeData";
import { Recipe } from "./recipeData";

function App() {
  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/recipe')
   .then( response => response.json() )
   .then( data => {console.log(data)
  setExternalRecipes(data)} )
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {externalRecipes.map((rec) => {
          return (
            <Route
              path={`recipe/:${rec.name}`}
              element={
                <RecipePage
                  name={rec.name}
                  image={rec.image}
                  desc={rec.description}
                  ingred={rec.ingredients}
                  instruc={rec.instructions}
                />
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
