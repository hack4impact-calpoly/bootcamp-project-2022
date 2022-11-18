import '../App.css'
import {Recipe} from '../recipeData';
import { Link } from "react-router-dom";


function RecipePreview(internal: Recipe, external: Recipe){
  const id = internal.name
  // console.log(internal.image)
    return(
    
    <div className="recipe-home">
    <Link to = {`/Page/${id}`}>
      <h2 className="recipe-header">{internal.name}</h2>
    </Link>
    <div className="recipe-card">
      <img
        src={internal.image}
        className="small-img"
        alt={internal.name}
      />
      <p className="card-desc-home">{internal.description} </p>
       

    </div>
  </div>
    );
}

export {RecipePreview}
