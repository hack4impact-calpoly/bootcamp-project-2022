import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from './components/About';
import RecipePage from "./components/RecipePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import recipes from "./recipeData"
import {Recipe} from "./recipeData"
import { useEffect, useState } from 'react';




function App() {

  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
      .then((res) => res.json())
      .then((data) => setExternalRecipes(data));
  }, []);
  const compRecipes = [...recipes, ...externalRecipes] ;

  return (
    
      
    // somewhere in the return statement of App()
    <BrowserRouter>
			{/* Things that are rendered on every page, such as navbars, go here */}
      <Navbar />
      <Routes>
        {/* // Routes go here */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        {compRecipes.map ((recipe)=>
        <Route path={"/recipe/:" + recipe.name} element={<RecipePage
      name={recipe.name}
      description={recipe.description}
      image={recipe.image}
      ingredients={recipe.ingredients}
      instructions={recipe.instructions}
      />
        }/>)}
        {/* <Route path="/recipe/:name" element={recipes.map((recipe) => (
    <RecipePage
      name={recipe.name}
      description={recipe.description}
      image={recipe.image}
      ingredients={recipe.ingredients}
      instructions={recipe.instructions}
    />
  ))} /> */}

      </Routes>
    </BrowserRouter>
    
  
  );
}

export default App;
