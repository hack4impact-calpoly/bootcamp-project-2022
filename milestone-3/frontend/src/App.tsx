import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from './components/About';
import RecipePage from "./components/RecipePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import recipes from './recipeData';




function App() {


  return (
    
      
    // somewhere in the return statement of App()
    <BrowserRouter>
			{/* Things that are rendered on every page, such as navbars, go here */}
      <Navbar />
      <Routes>
        {/* // Routes go here */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/recipe/:name" element={recipes.map((recipe) => (
    <RecipePage
      name={recipe.name}
      description={recipe.description}
      image={recipe.image}
      ingredients={recipe.ingredients}
      instructions={recipe.instructions}
    />
  ))}/>

      </Routes>
    </BrowserRouter>
    
  
  );
}

export default App;
