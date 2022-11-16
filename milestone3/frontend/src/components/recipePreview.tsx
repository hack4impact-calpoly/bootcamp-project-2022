import React from "react";
import { Link } from "react-router-dom";
import "./recipePreview.css";

interface previewProps {
  name: string;
  image: string;
  external?: boolean;
}
export default function RecipePreview(props: previewProps) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <body>
      <main>
        <div className="recipe-box">
          {/* linking to a recipePage with the correct URL parameter based on name prop passed to this instance of RecipePreview */}
          <Link
            className="recipe-title"
            to={
              props.external
                ? `/externalRecipe/${props.name}`
                : `/recipe/${props.name}`
            }
          >
            {props.name}
          </Link>
          <img className="image" src={props.image} alt="img" />
        </div>
      </main>
    </body>
  );
}

RecipePreview.defaultProps = {
  external: false,
};
