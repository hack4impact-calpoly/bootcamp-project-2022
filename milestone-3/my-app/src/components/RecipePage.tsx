import React from 'react';
import { useParams } from "react-router-dom";
import recipeData from "../recipeData";

interface RecipePage{
    title: string;
    image: string;
    imgAltName: string;
    ingredients: string[];
    preparation: string[]; 
    orig_link: string; 
    orig_link_name: string;
};

function RecipePage (){

    const {id} = useParams();
    const target = recipeData.find(recipe=> recipe.title === id)
    window.scrollTo(0, 0)

    if (target){ return(
        
        <div className = "recipe-container">
                  <h2>{target.title}</h2>
                  <img src= {target.image}
                      alt= {target.imgAltName}
                      width="350"/>
                  <h3>ingredients</h3>
                        <ul>
                            {target.ingredients.map(function(name, index) {
                                return <li key={index}>{name}</li>; 
                            })}
                        </ul>
                  <h3>preparation</h3>
                         <ol>
                            {target.instructions.map(function(name, index) {
                                return <li key={index}> {name} </li> ;
                            })}
                        </ol>
                  <p>recipe from: <a href={target.orig_link} target = "_blank">{target.orig_link_name}</a></p>     
              </div> 
        )} else {
            return( <p></p> );
        }
};

export default RecipePage;