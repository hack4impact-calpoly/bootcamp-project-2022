import Navbar from "./components/navbar";
import RecipePreview from "./components/recipePreview";
import Home from "./components/home";
import About from "./components/about";
import './App.css';
import recipes from "./recipeData.json"
import RecipePage from "./components/recipePage";
import {
    BrowserRouter as BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
        <Navbar />
        <About/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {recipes.map(recipe =>
            <Route path="/recipePage/:name" element={<RecipePage {...recipe} />} />
        )}
            
        </Routes>
    </BrowserRouter>
    <main>
    <h1 className="text"> Welcome to Arya's Best Cafe!</h1>
    {recipes.map(recipe =>
        <RecipePreview name={recipe.name} image={recipe.image} desc={recipe.description} />
    )}
    </main>
    </div>
  );
}

export default App;
