import './App.css';
import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import recipes from "./recipeData.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipePage from './components/recipePage';

function App() {
  return (
    // Links to all pages.
    <BrowserRouter> 
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='index' element={<Home />} />
          <Route path='index/recipe/:name' element={<RecipePage />}/>
          <Route path="index/externalRecipe/:name" element={<RecipePage external />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
