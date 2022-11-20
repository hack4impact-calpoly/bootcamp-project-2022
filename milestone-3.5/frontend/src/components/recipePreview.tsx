import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import recipes, { Recipe } from "../recipeData";
import RecipeDetailed from "./RecipePage";

function RecipePreview(props: Recipe){
    
    const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
    useEffect(() => {
        fetch("https://bootcamp-milestone-4.onrender.com/recipe")
          .then((res) => res.json())
          .then((data) => setExternalRecipes(data));
      }, []);
      let allRecipes = recipes.concat(externalRecipes);

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
                            <Link to={`externalRecipe/${props.name}`} className="a">See More</Link> 

                        </div>
                    </div>
            </div>
        </section>
        // </BrowserRouter>

    );
}

export default RecipePreview; 