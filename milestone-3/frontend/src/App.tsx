import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from "./components/navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import RecipePage from './components/RecipePage';
import { recipes } from './recipeData'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "about" element = {<About />} />
        {
          recipes.map((rec) => (<Route path = {rec.name} element = {<RecipePage {...rec} />} />))
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
