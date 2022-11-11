
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/About";
import RecipePage from "./components/RecipePage";
import recipes from "./recipeData";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {recipes.map((recipe) => {
          return <Route
          path={`recipe/:${recipe.name}`}
          element={<RecipePage name={recipe.name} image={recipe.image} desc={recipe.desc} ingredients={recipe.ingredients} instructions={recipe.instructions} alt={recipe.alt}/>}
        />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
