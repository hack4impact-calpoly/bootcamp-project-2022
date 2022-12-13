import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import recipes, { Recipe } from "../recipeData";


function RecipePreview(props: Recipe){
    
    const [recipes, setAllRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        fetch("http://localhost:3001/recipe")
        .then((res) => res.json())
        .then((data) => setAllRecipes(data));
    }, []);

    let add = "";
    if(props.external){
        console.log(props.name); 
        add = "externalRecipe/" + props.name;
    }else{
      add = "recipe/" + props.name; 
    }

    return (
        <section className="projects"id="projects"> 
            <div className="max-width">
                    <div className="projects-content"id="proj-jump">
                        <div className="huffman">
                            <h2 className="header-sec">{props.name}</h2>
                            <p> 
                                <span>{props.description}<br/></span>
                            </p>
                            <Link to={add} target = "_self" className="a">See More</Link> 

                        </div>
                    </div>
            </div>
        </section>
    );
}

export default RecipePreview; 