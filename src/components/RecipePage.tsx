import {Recipe} from "../recipeData"
import './recipePage.css'
import { useParams } from "react-router-dom";
import recipes from "../recipeData";
import React, { ChangeEvent, useEffect, useState } from 'react';


    interface RecipePageProps {
        external?: boolean;
      }

export default function RecipePage(props: RecipePageProps){

    const { id } = useParams();
    
     // state variables
     const[newIngredient, setNewIngredient] = useState('');
     const[newInstruction, setNewInstruction] = useState('');
     const[curr_Recipe, setRecipe] = useState<Recipe>(recipes[0]);
     const [allInstructions, setAllInstructions] = useState<any[]>([]);
     const [allIngredients, setAllIngredients] = useState<any[]>([]);
     
        

    useEffect(() => {

      

        if (props.external) {
            
            
            const grabRecipes = async () => {
                //get request for an external recipe
                let data = await fetch("https://bootcamp-milestone-4.onrender.com/recipe/" + id);
                let recipeData = await data.json();
                setRecipe(recipeData[0]);
                setAllIngredients([...recipeData[0].ingredients])
                setAllInstructions([...recipeData[0].instructions]);
            }
            grabRecipes();


        } else {
          //normal recipe
          let target = recipes.find(element => (element.name == id))!;
          setRecipe(target)
          setAllIngredients([...target.ingredients])
          setAllInstructions([...target.instructions])
        }
      }, [id, props.external]);

   

    
    return(



        <main>

        <div className="card">
       
            <h1 className="title2">{curr_Recipe.name  }</h1>

            <div className="card-body">

                <img className="card-img" src={curr_Recipe.image} /> 

                <ul className="card-text"> 
                

                    {/*}printing allInstruction list {*/}
                 {allInstructions.map(function(name, index) {
                return <li key={index}>{name}</li>;
                    })}


                    {/*} code responsbile for storing a new instruction from user input {*/}

                    <input 
                        placeholder= "Some random step"
                        value = {newInstruction}
                        onChange={(e: ChangeEvent<HTMLInputElement>)  => {
                            setNewInstruction(e.target.value);
                        
                        }}
                        />

                        {/*} code responsbile for new instruction to allInstructions {*/}
                    <button onClick={() => setAllInstructions([...allInstructions, newInstruction ])}> 
                                Add instruction
                    </button>


                </ul>
            </div>
        </div>


        <div className="card">

            <div className="preparations-title"> 

            <p>Steps</p>
      
            </div>


            <ol className ="card-text">

                        {/*} printing all ingredients{*/}
                        {allIngredients.map(function(name, index) {
                            return <li key={index}>{name}</li>;
                        })}


                            {/*responsible for input box that stores a temp variable that is appended to a larger set {*/}
                                                    <input
                            placeholder = "3 cups of mystery juice"
                            //the value that is inputted will be stored in value, im guessing value is a variable associated with the <input> tag
                            value = {newIngredient}
                            //onChange keeps track of when input tags are updated/interacted with 
                            onChange={(e: ChangeEvent<HTMLInputElement>)  => {
                                setNewIngredient(e.target.value);
                            
                            }}
                            />

                            {/*} needed to change on change to on click in order to for changes to occur
                            not sure if i messed someting up or if this was an issue on their part{*/}
                            <button onClick={() => {
                                setAllIngredients([...allIngredients, newIngredient])}}>

                            Add Ingredient
                            </button>

            </ol>
            </div>
            </main>             

    )
                            }



RecipePage.defaultProps = {
    external: false
  };

