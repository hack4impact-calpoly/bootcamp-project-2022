import '../App.css';
import foodPic1 from "../images/Instant-Pot-Chicken-Marinara-with-Polenta-12.jpeg"
import foodPic2 from "../images/Broccoli-Pesto-Pasta-7.jpeg"
import foodPic3 from "../images/Lemon-Chicken-7.jpeg"
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import recipes, {Recipe} from '../recipeData';
import RecipePreview from "./RecipePreview";
import { Link } from 'react-router-dom';

  function Home(){
    const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
      useEffect(() => {
        // http://localhost:3001/recipe
        // https://bootcamp-milestone-4.onrender.com/recipe/
        fetch("http://localhost:3001/recipe")
          .then((res) => res.json())
          .then((data) => setExternalRecipes(data));
      }, []);
    const[recipe] = useState<Recipe>({
      name: "",
      description: "",
      image: "",
      ingredients: [],
      instructions: []
      })
    let address = ""
    address = "/recipe" + recipe.name
    return (
    <main>
      <h1>Welcome to Muzart's Awesome Kitchen!</h1>
      <div className ="card-container">
        <div className ="card">
          <h2><Link to={address}>Instant Pot Marinara Chicken with Polenta</Link></h2>
          <div className ="card-body">
            <img className ="imgs" src={foodPic1} alt="instant pot chicken marinara with polenta" />
            <p className="card-text">Instant pot marinara chicken with polenta, sounds pretty good and fast to make, 
              might try this! I like chicken too so it should be pretty good.</p>
          </div>
        </div>
        <div className ="card">
          <h2><Link to={address}>Brocolli Pesto Pasta</Link></h2>
          <div className ="card-body">
            <img className ="imgs" src={foodPic2} alt="brocolli pesto pasta" />
            <p className ="card-text">Brocolli pesto pasta, doesn't sound the best, but it's very green, 
              and apprently tastes pretty good too so I might try this.</p>
          </div>
        </div>
        <div className ="card">
          <h2><Link to={address}>Lemon Chicken</Link></h2>
          <div className ="card-body">
            <img className ="imgs" src={foodPic3} alt="lemon chicken" />
            <p className ="card-text">Easy lemon chicken, it's very tasty no cap</p>
          </div>
        </div>
      </div>
  </main>
  
    )
  }

export default Home;
