import Navbar from "./components/navbar";
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
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {recipes.map(recipe =>
            <Route path={`/recipePage/${recipe.name}`} element={<RecipePage {...recipe} />} />
        )}
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
