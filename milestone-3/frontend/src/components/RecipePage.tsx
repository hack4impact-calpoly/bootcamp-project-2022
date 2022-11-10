import ramen from "./images/ramen.jpeg"
import laksa from "./images/laksa.jpeg"
import satay from "./images/satay.jpeg"
import { Recipe } from "../recipeData";

import { Link, useParams } from "react-router-dom";
import recipes from '../recipeData'
import "./RecipePage.css";

interface recipePageProp{
    name: string, 
    description: string,
    image: string,
    ingredients: string[];
    instructions: string[];
    idx: number; 
}

export default function RecipeDetailed({name, description, image, ingredients, instructions, idx}: recipePageProp){
    
    const { id } = useParams();
    let newImage; 
    // const recipe = recipes[Number(id)];
    if(image === "satay"){
        newImage = satay; 
    }else if(image === "laksa"){
        newImage = laksa; 
    }else{
        newImage = ramen; 
    }
  
    
    return (
        
    <section className="huffman-page"id="huffman-page">
    <body>
        <div className="max-width">
            <div className="top-sec">
                <Link to='/'>Home</Link>
                <h2 className="title">{name}</h2>
                
            </div>
            <div className="huffman-content">
                
                    
                    {/* <!-- <h2 className="huffman-sec">Huffman Encoding/Decoding (python)</h2> -->
                    <!-- go back button to go back to the index.html --> */}
                    <div className="col left">
                        <img src= {newImage}/>
                    </div>

                    <div className="col right">
                        <div className="first">
                            <p> 
                                <h2>INGREDIENTS</h2>
                                <ul>
                                    {ingredients.map((item, idx) => (
                                        <li key = {idx}>{item}</li>
                                    ))}
                                    
                                </ul>
                            </p>

                            <p>
                                <h2>PREPARATION</h2>
                                <ol>
                                    {instructions.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ol>
                            </p>
                    </div>
                </div>
            </div>
            </div>
        </body>
    </section>);

}