import React from "react";
import "./home.css";
import { recipes } from "../recipeData";
import RecipePreview from "./RecipePreview";

export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  }

export default function Home() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <div className="hero">
        <div className="container">
            <h1>Wecome To My Kitchen</h1>
            <p>I wish everyone who loves to cook would have this website bookmarked:)</p>
            {recipes.map((recipe?:any) => 
                <RecipePreview 
                    {...recipe}
                />
            )}
            
        </div>
    </div>
  );
}