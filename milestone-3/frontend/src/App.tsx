import "./App.css";
import Home from "./components/home";
import About from "./components/About";
import RecipePage from "./components/RecipePage";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

interface Recipe {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/recipe")
      .then((response) => response.json()).then((recipeData) => {
        setRecipes(recipeData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* home page */}
        <Route path="/" element={<Home />} />
        {/* about page */}
        <Route path="/about" element={<About />} />
        {/* recipe pages */}
        <Route path="/recipe/name" element={<RecipePage />} />
        <Route path="externalRecipe/:id" element={<RecipePage external />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
