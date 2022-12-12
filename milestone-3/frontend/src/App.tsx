import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from "./components/navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import RecipePage from './components/RecipePage';
import { recipes } from './recipeData'
import { useEffect, useState } from 'react'; 
import { Recipe } from './recipeData';

function App() {
    // Creates an array (state variable) to store any external recipes drawn from the Hu's Chews API.
    // Initializes that array with an empty array that stores objects with the Recipe interface, 
    // to be populated soon.
    const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
    
    // Calls on the API to deliver recipe data, formats that data as an array of JSON objects, 
    // then sets the state variable for the external recipes to that array of JSON objects.
    useEffect(() => {
        fetch("https://bootcamp-milestone-4.onrender.com/recipe")
            .then((res) => res.json())
            .then((data) => setExternalRecipes(data));
    }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "about" element = {<About />} />
        {/*An array of routes created based on each recipe in recipeData:*/}
        {
          recipes.map((rec) => (<Route path = {"recipe/" + rec.name} element = {<RecipePage {...rec} />} />))
        }
        {/*An array of routes created based on each external recipe from the Hu's Chew's API:*/}
        {
          externalRecipes.map((rec) => (<Route path = {"externalRecipe/" + rec.name} element = {<RecipePage {...rec} />} />))
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
