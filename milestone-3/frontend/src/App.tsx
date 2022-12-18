import './App.css';
import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipePage from './components/recipePage';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import { Button } from 'react-bootstrap';
import Random from './components/Random';
import AddRecipeForm from './components/AddNewRecipe';

interface Recipe {
  name: string,
  description: string,
  image: string,
  ingredients: string[],
  instructions: string[],
}

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    fetch("http://localhost:3001/recipe")
    .then((response) => response.json())
    .then(recipeData => setRecipes(recipeData))
    .catch((err) => console.log(err))
  }, [])
  return (
    // Links to all pages.
    <div>
      <Helmet>
        <link rel="stylesheet" href="./App.css" />
        <link rel="icon" href="https://previews.123rf.com/images/pshonka/pshonka2006/pshonka200600154/149118370-chef-cooking-cap-vector-icon-graph-symbol-for-cooking-web-site-design-logo-app-ui.jpg"/>
        <title>Swayam's Recipes</title>
      </Helmet>
    <BrowserRouter> 
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='index' element={<Home />} />
          <Route path='random' element={<Random />} />
          <Route path='add' element={<AddRecipeForm />} />
          <Route path='/recipe/:name' element={<RecipePage />}/>
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
