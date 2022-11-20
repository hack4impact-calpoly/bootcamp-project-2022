import ramen from "./images/ramen.jpeg"
import laksa from "./images/laksa.jpeg"
import satay from "./images/satay.jpeg"
import { Recipe } from "../recipeData";
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import recipes from '../recipeData'
import "./RecipePage.css";


interface recipePageProp{
    name: string, 
    description: string,
    image: string,
    ingredients: string[];
    instructions: string[];
    external?: boolean;
}

export default function RecipeDetailed(props: recipePageProp){

    const [newIngredient, setNewIngredient] = useState('');
    const [allIngredients, setAllIngredients] = useState(props.ingredients);
    const [newStep, setNewStep] = useState('');
    const [allSteps, setAllSteps] = useState(props.instructions);
    const{id} = useParams();
    function addIngredient(){
        setAllIngredients([...allIngredients, newIngredient]);
        console.log(allIngredients); 
    }
    function addStep(){
        setAllSteps([...allSteps, newStep]);
        console.log(allSteps);
    }
    // useEffect(() => {
    //     if (props.external) {
    //       // make an API call with the url param & setRecipe
    //     } else {
    //       // query all of your recipe data for the recipe you want & setRecipe
    //     }
    //   }, [params.id, props.external]);
    //     return (...)

    

    let newImage; 
    // const recipe = recipes[Number(id)];
    if(props.image === "satay"){
        newImage = satay; 
    }else if(props.image === "laksa"){
        newImage = laksa; 
    }else if(props.image === "ramen"){
        newImage = ramen; 
    }else{
        newImage = props.image;
    }
    
    
    return (
        
    <section className="huffman-page"id="huffman-page">
    <body>
        <div className="max-width">
            <div className="top-sec">
                <Link to='/'>Home</Link>
                <h2 className="title">{props.name}</h2>
                
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
                                    {allIngredients.map((item, idx) => (
                                        <li key = {idx}>{item}</li>
                                    ))}
                                    
                                </ul>
                            </p>

                            <div>
                                
                                <h3>Add an Ingredient</h3>
                                <label htmlFor="newIngredient">Ingredient: </label>
                                <input  
                                    placeholder = "2 cups of spinach"
                                    value={newIngredient} //add newIngredient as the input's value
                                    onChange={(e: ChangeEvent<HTMLInputElement>)=>{
                                        setNewIngredient(e.target.value);
                                        console.log(newIngredient); 
                                    }}
                                />
                                <button onClick={addIngredient}>
                                    Add Ingredient
                                </button>

                            </div>

                            <p>
                                <h2>PREPARATION</h2>
                                <ol>
                                    {allSteps.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ol>
                            </p>
                            <div>
                                <h3>Add a prep step</h3>
                                <label htmlFor="newPrep">Step: </label>
                                <input
                                    placeholder = "add 50 ml of water"
                                    value={newStep}
                                    onChange={(e: ChangeEvent<HTMLInputElement>)=>{
                                        setNewStep(e.target.value); 
                                        console.log(newStep);
                                    }}

                                />
                                <button onClick={addStep}>
                                    Add Step
                                </button>
                            </div>
                    </div>
                </div>
            </div>
            </div>
        </body>
    </section>);

}
RecipeDetailed.defaultProps={
    external: true,
};