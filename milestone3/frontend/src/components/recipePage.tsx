import React from 'react';
import './recipePreview.css'
import {Recipe} from "../recipeData"
import recipes from "../recipeData"
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";


export default function RecipePage()    {
    const {id} = useParams();
    const props = recipes.find(x=> x.name == id);
  if(props){
  return (
      <main>
    <h1 className="bighead"> {props.name}</h1>

<   div className="recnumdiv"> 
    <img src={props.image} className="recpic" />
    <div>
    <h2>Ingredients</h2>
    <ul>
    {props.ingredients.map(function(name, index) {
    return <li key={index}>{name}</li>;
        })}
    </ul>
    </div>
</div>

<h3>Steps to Success</h3>
<ol>
{props.instructions.map(function(name, index) {
    return <li key={index}>{name}</li>;
        })}
</ol>
</main>








  );
}
return(<main><p>Oops! Something wrong happened!</p></main>)}
