import React from "react";
//import "./navbar.css";
import RecipePreview from "./recipePreview";
import recipes from "../recipeData"


export default function Home() {
  return (
      /* /* // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
         
    /* <RecipePreview name={recipeData[0].name} image={recipeData[0].image} desc={recipeData[0].description}/> */ 

    <div className = "body-of-frontpage">
        { recipes.map((recipe) => (
            <RecipePreview
            name={recipe.name}
            description={recipe.description}
            image={recipe.image}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
            />
  ))}
  
        {/* <div className = "body-of-frontpage">
            <div className = "recipe1">
                <div className = "Recipe1">
                    <h2> <a href = "recipe1.html" className = "grilled_chk">Grilled Chicken and Salad</a> </h2>
                    <div className = "Recipe1_body"> 
                        <img src="https://www.dinneratthezoo.com/wp-content/uploads/2020/12/grilled-chicken-salad-4.jpg" alt="Grilled Chicken and Salad image"/>
                        <p className = "text"> This grilled chicken salad is tender marinated chicken that’s grilled to perfection then served over lettuce with bacon, avocado, corn, blue cheese and tomatoes. A hearty salad that’s packed with flavor and also happens to be full of nutrition.</p>
                    </div>
                </div> 
            </div> 
            <div className = "recipe2">
                <div className = "Recipe2">
                    <h2> <a href = "recipe2.html" className = "_dip">Seven Layered Dip</a> </h2>
                    <div className = "Recipe2_body"> 
                        <img src="https://modernmealmakeover.com/wp-content/uploads/2021/04/7-Layer-Dip.jpg" alt="Seven Layered Dip image"/>
                        <p className = "text"> 7 layer dip is one of the best party appetizers ever. Layers of fresh salsa, refried beans, guacamole, and cheddar cheese.  I serve this 7 layer bean dip recipe with some tortilla chips and veggies (which can also go alongside other dips like spinach dip for a great party spread).</p>
                    </div>
                </div> 
            </div> 
            
            <div className = "recipe3">
                <div className = "Recipe3">
                    <h2> <a href = "recipe3.html" className = "zucchini">Zucchini/Chicken Skillet Tex Mex</a> </h2>
                    <div className = "Recipe3_body"> 
                        <img src="https://ifoodreal.com/wp-content/uploads/2017/07/chicken-and-zucchini-4.jpg" alt="Zucchini/Chicken Skillet Tex Mex image"/>
                        <p className = "text"> This Tex Mex chicken and zucchini is a variation of my black bean quinoa casserole with added chicken for a protein boost and quinoa replaced by zucchini. Everything is cooked within 30 minutes, right in one pan. You can serve this Mexican chicken and zucchini on its own as is – that’s what we usually do. Or as a garnish, feel free to add sour cream, diced avocado, cilantro and black olives after the cheese was melted. Top with crushed tortilla chips (or make air fryer nachos!).</p>
                    </div> 
                </div> 
            </div>
        </div>
    </main> */}
</div>

  );
}