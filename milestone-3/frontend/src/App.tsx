import React, {useEffect, useState} from 'react';
import './App.css';
import Home from './components/home';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import RecipePage from './components/RecipePage';
import { recipeObj } from './recipeData';
import NoMatch from './components/NoMatch';
import About from './components/About';
import { defaultRecipe, Recipe } from './recipeData';


const slugify = require("slugify")


function convertRecipe(data: defaultRecipe[]){
    const huRecipes: defaultRecipe[] = data;
    const new_recipes: Recipe[] = [];
    for (let recipe of huRecipes){
        new_recipes.push({...recipe, category:'Lunch', ingredients: [{title: '', ingredients: recipe.ingredients}], instructions: recipe.instructions.map((instruction) => ({mainList: instruction, subList: ['']})), slug:slugify(recipe.name, {replacement: '_', lower: true})})
    }
    return new_recipes
  }


function App() {

  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
      .then((res) => res.json())
      .then((data) => {
        setExternalRecipes(convertRecipe(data));
        setLoading(false);
      });
  
  }, []);
  
  if (loading){
    return <div className='flex-container center'><p>Loading...</p></div>
  }
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes> 
        <Route path='/' element={<Home recipes={[...recipeObj, ...externalRecipes]}/>}/>
        <Route path='about' element={<About/>} />
        <Route path="recipes/:id" element={<RecipePage recipes={[...recipeObj, ...externalRecipes]} />} />
        <Route path='/*' element={<NoMatch />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
