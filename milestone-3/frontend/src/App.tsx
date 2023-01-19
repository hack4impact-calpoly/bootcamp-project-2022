import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import RecipePage from './components/RecipePage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import recipes from './recipeData';

export default function App() {
  return (
    <BrowserRouter>
			<Navbar />
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="about" element={<About />} />
        {recipes.map(recipe=>
        <Route path="recipes/:name" element={<RecipePage {...recipe}/>} /> )}
      </Routes>
    </BrowserRouter>
  );
}