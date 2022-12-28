import React from 'react';
import { useParams } from "react-router-dom";
import recipes from "../recipeData";
import "./RecipePage.css";

interface RecipePage{
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
    altDesc: string
  }

function RecipePage (){

    const {id} = useParams();
    const wanted = recipes.find(recipe => recipe.name === id)

    if (wanted){

        return(
            <body>
            <div className = "all-page">
                <h1 className="page-recipe-header main-header">{wanted.name}
                </h1>
                <div className="recipe-page-first">
                <img 
                    src= {wanted.image}
                    alt= {wanted.altDesc}
                    className="recipe-img"
                    />
                <div className="recipe-desc-ingr">
                <p className="page-card-desc">{wanted.description}</p>

                <div className="ingredients">
                <div className = "body-ingredients">
                  <h3 className = "page-recipe-header main-header">ingredients</h3>
                        <ul>
                            {wanted.ingredients.map(function(name, index) {
                                return <li key={index}>{name}</li>; 
                            })}
                        </ul>
                </div>
                </div>
                </div>
            </div>


            <div className="instructions">
                  <h3 className="recipe-header-page main-header">instructions</h3>
                         <ol>
                            {wanted.instructions.map(function(name, index) {
                                return <li key={index}> {name} </li> ;
                            })}
                        </ol>
 
              </div>
              </div> 
              </body>
        )} else {
            return( <h3>This recipe doesn't exist.</h3> );
        }
};

export default RecipePage;
