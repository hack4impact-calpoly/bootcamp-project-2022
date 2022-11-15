import React from 'react';
import './recipePreview.css';
import {Recipe} from '../recipeData';
import { Link } from 'react-router-dom';

/* was getting error when trying to import recipe so just copied and pasted
the interface. Gonna try to figure out why the import didnt work */



export default function RecipePreview(props: Recipe)
{
    return (

        <div className = "card">

                <div className="item-title"> 

                    <Link to= {'/recipe/' + props.name }className="nav_item"> {props.name} </Link> 
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