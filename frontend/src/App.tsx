
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import recipes from './recipeData';
// import Recipe from './components/recipe';
import RecipePage from './components/recipe';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/recipe/:name" element={<RecipePage />} />
       </Routes>

     </BrowserRouter>
  );
  
}

export default App;



