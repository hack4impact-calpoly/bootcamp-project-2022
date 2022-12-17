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

interface Recipe {
  name: string,
  description: string,
  image: string,
  ingredients: string[],
  instructions: string[],
  // external: boolean
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
      </Helmet>
    <BrowserRouter> 
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='index' element={<Home />} />
          <Route path='random' element={<Random />} />
          <Route path='/recipe/:name' element={<RecipePage />}/>
          {/* <Route path="index/externalRecipe/:name" element={<RecipePage external />}/> */}
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
