import './App.css';
import Navbar from "./components/navbar"
import Home from "./components/Home"
import About from "./components/About"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipeDetailed from './components/RecipePage';
import { useEffect, useState } from 'react';

interface Recipe {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}

function App() {
  //settimg up useState/Effect for fetching recipe data
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    fetch("http://localhost:3001/recipe ") 
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch(err => console.log(err));
  }, []);
  
  return (
    
    <main>            
            <BrowserRouter>
              <Navbar/>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element = {<About/>}/> 
                   {recipes.map(recipe => {
                      return (<Route path= {`recipe/:id`} element={<RecipeDetailed name = {recipe.name} description = {recipe.description}
                                  image = {recipe.image} ingredients = {recipe.ingredients} instructions = {recipe.instructions}
                                />}/>)
                    })}
                    {recipes.map(recipe => {
                      return (<Route path= {`externalRecipe/:id`} element={<RecipeDetailed name = {recipe.name} description = {recipe.description}
                      image = {recipe.image} ingredients = {recipe.ingredients} instructions = {recipe.instructions} external/>}/>)})}
                    
                </Routes>
                
            </BrowserRouter>
    </main>
    
  );
}

export default App;
