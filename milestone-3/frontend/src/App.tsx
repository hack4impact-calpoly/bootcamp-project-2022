import './App.css';
import Navbar from "./components/navbar";
import RecipePreview from './components/RecipePreview';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import recipeData from "./recipeData";
import About from "./components/About";
import Home from "./components/Home";
import RecipePage from './components/RecipePage';

function App(){

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path = "/:name" element ={<RecipePage/>}/>
       <Route path = "recipe/:name" element ={<RecipePage />}/>
       <Route path="externalRecipe/:id" element={<RecipePage external/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;
