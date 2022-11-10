import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import RecipePage from './components/RecipePage';
import RecipePreview from './components/RecipePreview';
import About from './components/AboutMe';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import recipes from './recipeData';

const App = () => {
  return (
    <Navbar />
    
  );
}

export default App;
