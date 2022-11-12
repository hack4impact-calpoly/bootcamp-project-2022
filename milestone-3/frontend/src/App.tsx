import './App.css';
import recipeData from "./recipeData"
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import RecipePage from './components/RecipePage';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            {/*<Route path="/recipe/:name" element={<RecipePage/>} /> */}
        </Routes>
    </BrowserRouter>
  )
    { /*
      <nav>
        <div className="flex-container">
            <a className="page" href="index.html">Home</a>
            <a className="page" href="about.html">About</a>
        </div>
    </nav>
    <header>
        <h1>Today's Sweets</h1>
        <p><i>Find your favorite baking recipes</i></p>
    </header>
    <main>
        <RecipePreview name={recipeData[0].name} image={recipeData[0].image} desc={recipeData[0].desc} alt={recipeData[0].alt} ingredients={recipeData[0].ingredients} steps={recipeData[0].steps} source={recipeData[0].source}/>
        <RecipePreview name={recipeData[1].name} image={recipeData[1].image} desc={recipeData[1].desc} alt={recipeData[1].alt} ingredients={recipeData[0].ingredients} steps={recipeData[0].steps} source={recipeData[0].source}/>
        <RecipePreview name={recipeData[2].name} image={recipeData[2].image} desc={recipeData[2].desc} alt={recipeData[2].alt} ingredients={recipeData[0].ingredients} steps={recipeData[0].steps} source={recipeData[0].source}/>
        { /* 
        <div className="flex-container-recipes">
            <img src="https://hips.hearstapps.com/delish/assets/15/38/1442507902-mini-pumpkin-chocolate-chip-muffins-delish-2-3.jpg" alt="Pumpkin Chocolate Chip Muffins"/>
            <div className="text">
                <h3><a href="pumpkin.html"><u>Pumpkin Chocolate Chip Muffins</u></a></h3>
                <p>Just as stated, pumpkin chocolate chip muffins! A great Halloween snack.</p>
            </div>
        </div>
        <div className="flex-container-recipes">
            <img src="https://hips.hearstapps.com/vidthumb/images/delish-homemade-ice-cream-still001-1527189218.jpg?crop=0.790xw:0.704xh;0.122xw,0.219xh&resize=1200:*" alt="Vanilla Ice Cream"/>
            <div className="text">
                <h3><a href="icecream.html"><u>Homemade Icecream</u></a></h3>
                <p>A personal favorite, good even when it's cold out.</p>
            </div>
        </div>
    
        <div className="flex-container-recipes">
            <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/02/27/0/FNK_Cake-Pops_H1.jpg.rend.hgtvcom.616.462.suffix/1582853049838.jpeg" alt="Cake Pops"/>
            <div className="text">
                <h3><a href="cakepop.html"><u>Cakepops</u></a></h3>
                <p>Somewhat hard to make but very worth it.</p>
            </div>
        </div>
        
    </main>
    </div>
  );
  */}
}

export default App;
