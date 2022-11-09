import React from "react";
import "./navbar.css";
import recipes from "../recipeData";
import RecipePreview from "./recipePreview";

export default function Home() {
  return (
    <main>
        {recipes.map((recipe) => 
            <RecipePreview {...recipe}/>)}
    <div className="recipe">
        <a href="recipe-1.html"><h2 className="recipe-title">Stir-fry Udon</h2></a>
        <div className="recipe-body">
            {/* <img class="image"src="https://choosingchia.com/jessh-jessh/uploads/2021/10/Yaki-Udon-Stir-Fry-9.jpg" alt="stir-fry udon" style="width:30%;height:30%"> */}
            <p className="recipe-description">This quick stir-fry udon dish will put a meal on the table in less than 30 minutes!</p>
        </div>
    </div>

    <div className="recipe">
        <a href="recipe-2.html"><h2 className="recipe-title">Blueberry Parfait</h2></a>
        <div className="recipe-body">
            {/* <img class="image"src="https://blueberry.org/wp-content/uploads/2020/09/bc-42-blueberry-breakfast-parfait.jpg" alt="blueberry parfait" style="width:30%;height:30%"> */}
            <p className="recipe-description">This blueberry parfait will satiate your morning cravings and leave you energized for the day! It is also great for an afternoon snack!</p>
        </div>
    </div>

    <div className="recipe">
        <a href="recipe-3.html"><h2 className="recipe-title">Fruit Smoothie</h2></a>
        <div className="recipe-body">
            {/* <img class="image"src="https://www.dinneratthezoo.com/wp-content/uploads/2018/05/frozen-fruit-smoothie-3.jpg" alt="fruit smoothie" style="width:30%;height:30%"> */}
            <p className="recipe-description">This smoothie can be put together in less than 10 minutes and will quench your thirst in seconds! The sweet and tangy flavors are refreshing at any time of day!</p>
        </div>
    </div>
    </main>
  );
}