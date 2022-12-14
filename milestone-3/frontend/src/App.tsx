import Home from "./components/home";
import About from "./components/About";
import RecipePage from "./components/RecipePage";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/CreateRecipe"
function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* home page */}
        <Route path="/" element={<Home />} />
        {/* about page */}
        <Route path="/about" element={<About />} />
        {/* recipe pages */}
        <Route path="/recipe/:name" element={<RecipePage />} />
        <Route path="/create" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
