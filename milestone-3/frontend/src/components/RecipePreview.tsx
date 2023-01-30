import React from 'react';
import './RecipePreview.css'
import {Recipe} from "../recipeData"
import { Link } from 'react-router-dom';
import foodPic1 from "./images/Instant-Pot-Chicken-Marinara-with-Polenta-12.jpeg"
import foodPic2 from "./images/Broccoli-Pesto-Pasta-7.jpeg"
import foodPic3 from "./images/Lemon-Chicken-7.jpeg"

interface RecipePreviewProps extends Recipe {
  external?: boolean;
}

function RecipePreview(props: RecipePreviewProps) {
    let address = "";
    address = "/recipe/" + props.name;
    return (
      <div className="card">
        <h2><Link to={address}>{props.name}</Link></h2>
        <div className="card-body">
          <img className="imgs" src={props.image} alt="instant pot chicken marinara with polenta"/>
          <p className="card-text">{props.description}</p>
        </div>
    </div>)

}
export default RecipePreview