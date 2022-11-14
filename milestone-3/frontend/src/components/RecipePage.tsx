import {Recipe} from '../recipeData';
import { Link } from "react-router-dom";
import './RecipePage.css'

export default function RecipePage(props: Recipe)
{
    return (
        <div className="flex-container">
            {/* <Link style={{textDecoration: 'none', color: '#faedcd'}} to="/" className ="links"> */}
            <h2> {props.name} </h2>
            {/* </Link> */}
            <p> {props.description}</p>
            <img className="imageIced" src={props.image1} alt={props.name}/>
            <img className="imageHot" src={props.image2}/>

        </div>
    );
}