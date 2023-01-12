import Navbar from "./components/navbar";
import {useState, useEffect} from 'react';
import Home from "./components/home";
import About from "./components/about";
import './App.css';
//import recipes from "./recipeData.json"
import RecipePage from "./components/recipePage";
import {
    BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';

import {Recipe} from "./types";

function App() {
const [recipes, setRecipes] = useState<Recipe[]>([]);

useEffect(() => {
  fetch("http://localhost:3001/recipe")
    .then((res) => res.json())
    .then((data) => setRecipes(data)).catch(err => console.log(err));
},[]);

return (
  <div>
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {recipes.map((recipe) =>(
              <Route path={`/recipe/${recipe.name}`} element={<RecipePage 
                name={recipe.name}
                description={recipe.description}
                image={recipe.image}
                ingredients={recipe.ingredients}
                instructions={recipe.instructions}  />} />
            )) }
        
        </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
