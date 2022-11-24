import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import RecipePage from './components/recipePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="recipe/:id" element={<RecipePage />}/>
      </Routes>      
    
    </BrowserRouter>
    
    
  );
}

export default App;
