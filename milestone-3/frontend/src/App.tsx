import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from './components/About';
import Recipe from "./components/recipe";
import { BrowserRouter, Routes, Route } from 'react-router-dom';




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
        <Route path="/recipe/:name" element={<Recipe />} />

      </Routes>
    </BrowserRouter>
    
  
  );
}

export default App;
