import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import RecipePage from './components/RecipePage';
import {BrowserRouter} from "react-router-dom"
import { Routes, Route } from "react-router";


function App() {
  //const [recipes, setRecipes] = useState<Recipe[]>([]);

  // useEffect(() => {
  //   fetch('http://localhost:3001/recipe')
  //     .then((response) => response.json())
  //     .then((recipeData) => setRecipes(recipeData))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="recipe/:id" element={<RecipePage />} />
      <Route path="externalRecipe/:id" element={<RecipePage external />} />
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;