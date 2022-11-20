import './App.css';
import laksa from "./images/laksa.jpeg"
import profile from "./images/profile.jpeg"
import ramen from "./images/ramen.jpeg"
import satay from "./images/satay.jpeg"
import RecipeData, { Recipe } from "./recipeData"
import Navbar from "./components/navbar"
import Home from "./components/Home"
import About from "./components/About"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipePreview from './components/recipePreview';
import RecipeDetailed from './components/RecipePage';
import { useEffect, useState } from 'react';
import recipes from './recipeData';
function App() {
  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
      .then((res) => res.json())
      .then((data) => setExternalRecipes(data));
  }, []);
  let allRecipes = recipes.concat(externalRecipes);

  
  return (
    
    <main>            
            <BrowserRouter>
              <Navbar/>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element = {<About/>}/> 
                   {allRecipes.map(recipe => {
                      return (<Route path= {`recipe/${recipe.name}`} element={<RecipeDetailed name = {recipe.name} description = {recipe.description}
                                  image = {recipe.image} ingredients = {recipe.ingredients} instructions = {recipe.instructions}
                                />}/>)
                    })}
                    {allRecipes.map(recipe => {
                      return (<Route path= {`externalRecipe/${recipe.name}`} element={<RecipeDetailed name = {recipe.name} description = {recipe.description}
                      image = {recipe.image} ingredients = {recipe.ingredients} instructions = {recipe.instructions} external/>}/>)})}
                    
                </Routes>
                
            </BrowserRouter>
    </main>
    
  );
}

export default App;
