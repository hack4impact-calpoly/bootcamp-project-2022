import React, {useEffect, useState} from 'react';
import './App.css';
import Home from './components/home';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import RecipePage from './components/RecipePage';
import { recipeObj } from './recipeData';
import NoMatch from './components/NoMatch';
import About from './components/About';
import { defaultRecipe, Recipe} from './recipeData';
import { time } from 'console';
interface RecipeExtend extends Recipe{
  _id: string;
}


const slugify = require("slugify")

function isRecipe(obj: defaultRecipe | Recipe): obj is defaultRecipe {
  
  let ingBool = true;

  for (let ing in obj.ingredients){
    ingBool = ingBool && (typeof ing == 'string')
  }

  let instrBool = true;
  
  for (let instr in obj.instructions){
    instrBool = ingBool && (typeof instr == 'string')
  }


  return (
      obj &&
      typeof obj == 'object' &&
      typeof obj.description == 'string' &&
      typeof obj.image == 'string' &&
      ingBool && instrBool &&
      typeof obj.name == 'string' && (typeof obj.category != 'string')
      
  );
}

function convertRecipe(data: (defaultRecipe | Recipe)[]){
    const huRecipes: (defaultRecipe | Recipe)[]= data;
    const new_recipes: Recipe[] = [];


    for (let recipe of huRecipes){
      if (isRecipe(recipe)){
        new_recipes.push({...recipe, category:'Lunch', ingredients: [{title: 'Main Ingredients', ingredients: recipe.ingredients}], instructions: recipe.instructions.map((instruction) => ({mainList: instruction, subList: ['']})), slug:slugify(recipe.name, {replacement: '_', lower: true})})
      }
      else{
        new_recipes.push({...recipe, slug:slugify(recipe.name, {replacement: '_', lower: true})})
      }

       
    }
    return new_recipes
  }


function App() {

  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const recipeURLS: string[] = ["https://bootcamp-milestone-4.onrender.com/recipe", "http://localhost:3010/recipes"]

  useEffect(() => {
    const fetch_data = async (urls:string[]) => {
      const json =  await (await fetch(urls[1])).json()
      const json2 =  await (await fetch(urls[0])).json()
      setExternalRecipes([...externalRecipes, ...convertRecipe(json), ...convertRecipe(json2)])
      setLoading(false)
    };
      
      // fetch_data(recipeURLS[1]).then(() => setLoading(false))
      // fetch_data(recipeURLS[0])
      fetch_data(recipeURLS)
      
        
      
      
      console.log('reload')
    

  }, []);
  
  if (loading){
    return <div className='flex-container center'><p>Loading...</p></div>
  }
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes> 
        <Route path='/' element={<Home recipes={externalRecipes}/>}/>
        <Route path='about' element={<About/>} />
        <Route path="recipes/:id" element={<RecipePage recipes={externalRecipes} />} />
        <Route path='/*' element={<NoMatch />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
