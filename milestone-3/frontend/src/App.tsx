import './App.css';
import laksa from "./images/laksa.jpeg"
import profile from "./images/profile.jpeg"
import ramen from "./images/ramen.jpeg"
import satay from "./images/satay.jpeg"
import RecipeData from "./recipeData"
import Navbar from "./components/navbar"
import Home from "./components/Home"
import About from "./components/About"
import { BrowserRouter, Routes } from 'react-router-dom';
import RecipePreview from './components/recipePreview';
function App() {
  return (
    // <BrowserRouter>
    <main>
      
      <Navbar/>
    {/*home section*/}
      <Home/>
    {/* <!-- about me --> */}
      <About/>
    {/* <!-- RECIPE section --> */}
    {/* <RecipeData /> */}

    <section className="projects"id="projects"> 
        <div className="max-width">

            <h2 className="title">My Favorite Foods!</h2>
            
            <div className="projects-content"id="proj-jump">
                <RecipePreview name = {RecipeData[0].name} description= {RecipeData[0].description}
                            image={RecipeData[0].image} ingredients={RecipeData[0].ingredients} instructions={RecipeData[0].instructions}
                            idx={RecipeData[0].idx}/>
                <RecipePreview name = {RecipeData[1].name} description={RecipeData[1].description} 
                            image = {RecipeData[1].image} ingredients={RecipeData[1].ingredients} instructions = {RecipeData[1].instructions}
                            idx={RecipeData[1].idx}/>
                <RecipePreview name = {RecipeData[2].name} description={RecipeData[2].description}
                            image = {RecipeData[2].image} ingredients={RecipeData[2].ingredients} instructions={RecipeData[2].instructions}
                            idx={RecipeData[2].idx}/>
                
            </div>
        </div>
    </section>
    
    </main>
    // </BrowserRouter>
  );
}

export default App;
