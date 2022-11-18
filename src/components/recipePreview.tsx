import React, { useEffect, useState } from 'react';
import './recipePreview.css';
import {Recipe} from '../recipeData';
import { Link } from 'react-router-dom';

/* was getting error when trying to import recipe so just copied and pasted
the interface. Gonna try to figure out why the import didnt work */


interface RecipePreviewProps extends Recipe {
    external: boolean;
  }


export default function RecipePreview(props: RecipePreviewProps)
{

    let address = ""
  
      

        if(props.external){
        address = "externalRecipe/" + props.name; // whatever it was before
        }

        else{
          address = "recipe/" + props.name;
        }
     
    

    return (

        <div className = "card">

                <div className="item-title"> 

                    <Link to= {address} className="nav_item"> {props.name} </Link> 
                   {/*}  <h3>{props.name}</h3> {*/}
                </div>

                <div className = "card-body">
                    
                    <img className="card-img" src={props.image}/> 
                    <p className="card-text"> 
                    {props.description}
                    </p>
                </div>

        </div>




    )


}