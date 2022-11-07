import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import { Home } from "./components/home/home";
import "./App.css";
import About from "./components/about/about";
import RecipePage from "./components/recipepage/recipepage";
import recipes from "./recipeData";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {recipes.map((rec) => {
          return <Route
          path={`recipe/:${rec.name}`}
          element={<RecipePage name={rec.name} image={rec.image} desc={rec.description} ingred={rec.ingredients} instruc={rec.instructions}/>}
        />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
