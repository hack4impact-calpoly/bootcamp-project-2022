
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/About";
import RecipePage from "./components/RecipePage";
import recipes from "./recipeData";
import { useEffect, useState } from 'react';

function App() {
  const [allRecipes, setUpdateRecipes] = useState(recipes);
  useEffect(() => {
    fetch('https://bootcamp-milestone-4.onrender.com/recipe')
      .then((res) => res.json())
      .then((data) =>
        setUpdateRecipes((curr: any) => {
          return [...curr, ...data];
        })
      );
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {allRecipes.map((recipe) => {
          return <Route
          path={`recipe/:${recipe.name}`}
          element={<RecipePage name={recipe.name} image={recipe.image} description={recipe.description} ingredients={recipe.ingredients} instructions={recipe.instructions}/>}
        />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
