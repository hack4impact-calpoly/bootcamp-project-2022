import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./recipepage.css";

interface recipePageProps {
  name: string;
  desc: string;
  image: string;
  ingred: string[];
  instruc: string[];
}

export default function RecipePage({
  name,
  desc,
  image,
  ingred,
  instruc,
}: recipePageProps) {
  const [ingredients, setIngredients] = useState(ingred);
  const [customIngred, setCustomIngred] = useState("");

  return (
    <div className="container">
      <div className="recipe-wrapper">
        <div className="recipe-header">
          <div className="recipe-l">
            <img
              src="https://veggiekinsblog.com/wp-content/uploads/2019/06/IMG_3641.jpg"
              alt="quinoa fried rice"
            />
          </div>
          <div className="recipe-r">
            <h2 className="recipe-title">{name}</h2>
            <p className="recipe-descrip">{desc}</p>
          </div>
        </div>
        <div className="recipe-body">
          <div className="ingredients">
            <h3>Ingredients</h3>
            <ul className="ingredient-list">
              {ingredients.map((ingred, idx) => {
                return <li key={idx}>{ingred}</li>;
              })}
            </ul>
            <div className="ingredient-adder">
              <label>Add an ingredient</label>
              <div className="inputs">
              <input type="text" value={customIngred} onChange={(e)=>{setCustomIngred(e.target.value)}}></input>
              <button className="ingredientbtn" onClick={()=>setIngredients([...ingredients, customIngred])}>add</button>
              </div>
              
            </div>
          </div>
          <div className="instructions">
            <h3>Instructions</h3>
            <ol className="instruction-list">
              {instruc.map((step, idx) => {
                return <li key={idx}>{step}</li>;
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
