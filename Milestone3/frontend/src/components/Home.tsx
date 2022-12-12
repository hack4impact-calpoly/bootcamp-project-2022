import React from "react";
import "./home.css";
import recipes, {Recipe} from '../recipeData';
import RecipePreview from "./recipePreview";

export default function Home() {
  return (
    
    <div>
    {recipes.map((recipe: Recipe ) => (
        <RecipePreview {...recipe} />
    ))}
    </div>
    
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // <div>
    //     <div className="container">
    //     <h2>
    //         <a href="pancakes.html">Pancakes</a>
    //     </h2>
    //     <div className="flex-body">
    //         <img src ="https://sportsnaut.com/wp-content/uploads/2014/03/tumblr_mb4rdytBfh1rodauuo1_500-405x420.jpg"></img>
    //         <h3>The perfect morning breakfast, especially with the Rock</h3>
    //     </div>
    //     </div>
    //     <div className="container">
    //         <h2>
    //             <a href="cookies.html">Cookies</a>
    //         </h2>
    //         <div className="flex-body">
    //             <img src ="https://upload.wikimedia.org/wikipedia/commons/f/f1/2ChocolateChipCookies.jpg"></img>
    //             <h3>Can't go wrong with cookies, unless they're oatmeal</h3>
    //         </div>
    //     </div>
    //     <div className="container">
    //         <h2>
    //             <a href="cake.html">Ice Cream Cake</a>
    //         </h2>
    //         <div className="flex-body">
    //             <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pound_layer_cake.jpg/800px-Pound_layer_cake.jpg"></img>
    //             <h3>Ice cream cake is the best cake</h3>
    //         </div>
    //     </div>
    // </div>
    
  );
}