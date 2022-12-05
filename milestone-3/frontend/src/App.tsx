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
  useEffect(() => {
    fetch("http://localhost:3001/recipe")
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
        <Route path={"/recipe/:name" } element={<RecipePage/>}/>
        <Route path={"/externalRecipe/:name" } element={<RecipePage external/>}/>
      </Routes>
    </BrowserRouter>
    
  
  );
}

export default App;
