import React from "react";
import { Recipe } from "../recipeData";
import "./recipePage.css";

export default function RecipePage(props: Recipe) {
  return (
    <body>
      <main>
        {/* <!-- recipe title and description --> */}
        <h1 className="recipe-title">{props.name}</h1>
        <p className="description">{props.description}</p>
        {/* <!-- ingredient list and image --> */}
        <div className="ingredient-box">
          <div className="ingredient-list">
            <h2>Ingredients</h2>
            <ul>
              <li>1 (15 ounce) can pumpkin puree</li>
              <li>1 (14 ounce) can EAGLE BRAND® Sweetened Condensed Milk</li>
              <li>2 large eggs</li>
              <li>1 teaspoon ground cinnamon</li>
              <li>½ teaspoon ground ginger</li>
              <li>½ teaspoon ground nutmeg</li>
              <li>½ teaspoon salt</li>
              <li>1 (9 inch) unbaked pie crust</li>
            </ul>
          </div>
          <img className="image2" src={props.image} alt="image" />
        </div>
        {/* <!-- instruction list --> */}
        <div className="steps-box">
          <h3>Preparation</h3>
          <ol>
            <li>Preheat the oven to 425 degrees F (220 degrees C).</li>
            <li>
              Whisk pumpkin puree, condensed milk, eggs, cinnamon, ginger,
              nutmeg, and salt together in a medium bowl until smooth. Pour into
              crust.
            </li>
            <li>Bake in the preheated oven for 15 minutes.</li>
            <li>
              Reduce oven temperature to 350 degrees F (175 degrees C) and
              continue baking until a knife inserted 1 inch from the crust comes
              out clean, 35 to 40 minutes.
            </li>
            <li>Let cool before serving.</li>
          </ol>
        </div>
      </main>
    </body>
  );
}
