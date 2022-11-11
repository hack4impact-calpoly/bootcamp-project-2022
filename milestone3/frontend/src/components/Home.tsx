import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import recipes from "../recipeData";

export default function Home() {
    return (
        <main>
        <h4 className="minititle">Click a menu item for the recipe!</h4>
        <div className="menu">
            {recipes.map((curRecipe) => 
                <Link to={curRecipe.path}>
                    <img className="item" src={curRecipe.image} alt="yummy food"/>
                </Link>
            )}
        </div>
    </main>
    );
  }