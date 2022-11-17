import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import RecipePage from './components/RecipePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import recipes, { Recipe } from "./components/recipeData";
import { ChangeEvent, useState, useEffect } from "react";

function App() {

  const [fetRecipes, setFetRecipes] = useState<Recipe[]>([])
  useEffect(() => {
    fetch("http://bootcamp-milestone-4.onrender.com/recipe")
    .then((response) => response.json())
    .then((data) => setFetRecipes(data))
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
				{recipes.map((recipe) => (
          <Route
            path={`/recipe/:name`}
            element={<RecipePage {...recipe} />}
          />
        ))}
        {fetRecipes.map((recipe) => (
          <Route
            path={`/recipe/:name`}
            element={<RecipePage {...recipe} />}
          />
        ))}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
