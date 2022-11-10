import './App.css';
import laksa from "./images/laksa.jpeg"
import profile from "./images/profile.jpeg"
import ramen from "./images/ramen.jpeg"
import satay from "./images/satay.jpeg"
import RecipeData from "./recipeData"
import Navbar from "./components/navbar"
import Home from "./components/Home"
import About from "./components/About"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipePreview from './components/recipePreview';
import RecipeDetailed from './components/RecipePage';
function App() {
  return (
    
    <main>
      
      
    {/*home section*/}
      {/* <Home/> */}
    {/* <!-- about me --> */}
    
      {/* <About/> */}
    {/* <!-- RECIPE section --> */}
    {/* <RecipeData /> */}

    
            
            <BrowserRouter>
              <Navbar/>
              {/* <section className="projects"id="projects"> 
                <div className="max-width">

                  <h2 className="title">My Favorite Foods!</h2> */}
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element = {<About/>}/> 
                   {RecipeData.map(recipe => {
                      return (<Route path= {`recipe/${recipe.idx}`} element={<RecipeDetailed name = {recipe.name} description = {recipe.description}
                                  image = {recipe.image} ingredients = {recipe.ingredients} instructions = {recipe.instructions}
                                idx = {recipe.idx}/>}/>)
                    })}
                </Routes>
                {/* put this in home component */}
                {/* {RecipeData.map(recipe => 
                                <RecipePreview name = {recipe.name} description = {recipe.description}
                                  image = {recipe.image} ingredients = {recipe.ingredients} instructions = {recipe.instructions}
                                idx = {recipe.idx}/>)} */}
                  {/* </div>
              </section> */}
            </BrowserRouter>

           
        
    
    </main>
    
  );
}

export default App;
