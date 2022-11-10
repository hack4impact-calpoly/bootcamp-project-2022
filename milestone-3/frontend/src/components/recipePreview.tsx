import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Recipe } from "../recipeData";
import RecipeDetailed from "./RecipePage";

function RecipePreview(props: Recipe){
    let idx = props.idx; 
    return (
        // <BrowserRouter>
        <section className="projects"id="projects"> 
            <div className="max-width">

                {/* <h2 className="title">My Favorite Foods!</h2> */}
                    <div className="projects-content"id="proj-jump">
                        <div className="huffman">
                            <h2 className="header-sec">{props.name}</h2>
                            <p> 
                                <span>{props.description}<br/></span>
                            </p>
                            <Link to={`recipe/${props.idx}`} className="a">See More</Link> 

                        </div>
                    </div>
            </div>
        </section>
        // </BrowserRouter>

    );
}

export default RecipePreview; 