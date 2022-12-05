
import './recipePreview.css'
import {Recipe} from "../recipeData"
import {Link} from 'react-router-dom';
interface RecipePreview extends Recipe {
  link: String;
}
export default function RecipePreview(props: RecipePreview) {
  
  return (
    <div >
    <div className = "recipe">
        <Link to={props.link + props.name}>
                <h2 className="recipe-title"> {props.name} </h2>
        </Link>
        
        
      <div className = "flex-content">
        <img className = "small_image" src={props.image} alt="img" />
        <p>{props.description}</p>
      </div>
      </div>
	</div>
  );
}