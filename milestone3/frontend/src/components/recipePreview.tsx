import React from "react";
import { Link } from "react-router-dom";
import "./recipePreview.css";

interface previewProps {
  name: string;
  image: string;
}
export default function RecipePreview(props: previewProps) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <body>
      <main>
        <div className="recipe-box">
          <Link className="recipe-title" to="pumpkinpie.html">
            {props.name}
          </Link>
          <img className="image" src={props.image} alt="img" />
        </div>
      </main>
    </body>
  );
}
