import RecipePreview from './components/recipePreview';
import recipes from "./recipeData"
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from "./components/home"
import About from "./components/about"
import RecipePage from "./components/recipePage"

function App() {
  return (
    
    <BrowserRouter>
    
      <Navbar/>
  
      <Routes>
        <Route path = "/" element = {< Home/>} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/recipe/:id" element={<RecipePage/>} />
        <Route path = "/externalRecipe/:id" element={<RecipePage external/>} />
      </Routes>
  
    </BrowserRouter>
    
    )
}

export default App;
