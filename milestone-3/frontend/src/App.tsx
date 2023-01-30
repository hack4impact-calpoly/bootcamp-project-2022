import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import RecipePage from './components/RecipePage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

export default function App() {
    
  return (
    <BrowserRouter>
			<Navbar />
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="about" element={<About />} />
        <Route path="recipe/:name" element={<RecipePage  />} />
        <Route path="externalRecipe/:name" element={<RecipePage external  />} />
      </Routes>
    </BrowserRouter>
  );
}