import { Link } from "react-router-dom";
import { Recipe } from "../recipeData";

function RecipePreview(props: Recipe){
    return (
        <div className="huffman">
            <h2 className="header-sec">{props.name}</h2>
            <p> 
                <span>{props.description}<br/></span>
            </p>
            {/* <Routes>
                <Route path="/ramen: {">See more</Link> 
            </Routes> */}
        </div>
    );
}

export default RecipePreview; 