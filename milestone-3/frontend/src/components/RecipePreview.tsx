import '../App.css'
import {Recipe} from '../recipeData';
import { Link } from "react-router-dom";


function RecipePreview(props: Recipe){
  const id = props.name
  console.log(props.image)
    return(
    
    <div className="recipe-home">
    <Link to = {`/Page/${id}`}>
      <h2 className="recipe-header">{props.name}</h2>
    </Link>
    <div className="recipe-card">
      <img
        src={props.image}
        className="small-img"
        alt={props.name}
      />
      <p className="card-desc-home">{props.description} </p>
       

    </div>
  </div>
    );
}

export {RecipePreview}
