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
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          {recipes.map(recipe => 
            <Route path={recipe.link} element={
              <RecipePage
                link = {recipe.link}
                name={recipe.name}
                desc={recipe.desc}
                image={recipe.image}
                ingredients={recipe.ingredients}
                instructions={recipe.instructions}
              />
            } />
          )};
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
