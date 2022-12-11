import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../recipeData';
import './recipePreview.css'

interface RecipePreviewProps extends Recipe {
    external: boolean;
}


export default function RecipePreview(props: RecipePreviewProps) {
    let address = props.external ? "externalRecipe/" + props.name : "recipe/" + props.type;
    return (
            // replace everything between the <div> & </div> tags
            // with your code from earlier milestones
        <div className='card'>
            <Link to={address}><h1> {props.name} </h1></Link>
            <div>
                <img src={`/cheerios/${props.image}`} alt="img" className='card-image'/>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

RecipePreview.defaultProps = {
    external: false
}
