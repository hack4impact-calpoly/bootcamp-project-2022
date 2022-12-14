
import React, { useEffect, useState } from 'react';
import './RecipePage.css'
// import { recipes } from '../recipeData'; 

import { useParams } from "react-router-dom";

interface Recipe {
    id:string | undefined;
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  }

interface RecipePageProps {
    external?: boolean;
      // other props
  }

type nameParams ={
    name: string;
   
}

 


export default function RecipePage(props: RecipePageProps) {
   const [recipe, setRecipe]=useState({id:"", name:"", description:"", image:"", ingredients:[], instructions:[]})
   // ingredient session
   const [newIngredient, setNewIngredient] = useState('') 
   const [allIngredients, setAllIngredients] = useState<string[]>(recipe.ingredients);
   // instruction session
   const [newInstruction, setNewInstruction] = useState('')
   const [allInstructions, setAllInstructions] = useState<string[]>(recipe.instructions); 
 
  
   const { name } = useParams<nameParams>();
  
  
   useEffect(()=>{
    setAllIngredients(recipe.ingredients)
    setAllInstructions(recipe.instructions)
  },[recipe.ingredients, recipe.instructions]) 


  
	useEffect(() => {
        if (props.external) {
          fetch("https://bootcamp-milestone-4.onrender.com/recipe/" +name?.replace(/ /g,"%20"))
         .then((res) => res.json())
         .then((data) => setRecipe(data[0]));
       
            } else {
          fetch("http://localhost:3001/recipe")
          .then((res)=>res.json())
          .then((data)=>{
            const myRecipe:any = data.find((recipe:Recipe)=>recipe.name===name) 
            setRecipe(myRecipe)
          })
        }
      }, [name, props.external]);
 
    

 
    const addIngredient=( )=> {
        const url=`http://localhost:3001/recipe/${name}/ingredient`
      
        fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ingredient: newIngredient}),
        })
        .catch(error => {
          window.alert(error);
          return;
        });

       
        setAllIngredients([...allIngredients, newIngredient])
        setNewIngredient('')
      }

    const addInstruction=( )=> {
        const url=`http://localhost:3001/recipe/${name}/instruction`
      
        fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({instruction: newInstruction}),
        })
        .catch(error => {
          window.alert(error);
          return;
        });

       
        setAllInstructions([...allInstructions, newInstruction])
        setNewInstruction('')
      }
    

    const deleteIngredient=async (e:any)=>{
      const text="Are you sure you want to remove it?"
      const userConfirm= window.confirm(text);
      
      if (userConfirm){
        const url=`http://localhost:3001/recipe/${name}/ingredient/delete`
        const targeIngredient = await e?.target?.id
      
        await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ingredient:targeIngredient}),
        })
        .catch(error => {
          window.alert(error);
          return;
        }); 

        const newIngredients:any= allIngredients.filter(( ingredient )=> {
          return ingredient!== targeIngredient;
        });
        setAllIngredients(newIngredients)
       
      }else{
        return 
      }
    }


    const deleteInstruction=async (e:any)=>{
      const text="Are you sure you want to remove it?"
      const userConfirm= window.confirm(text);
      
      if (userConfirm){
        const url=`http://localhost:3001/recipe/${name}/instruction/delete`
        const targeInstruction = await e?.target?.id
     
        await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({instruction:targeInstruction}),
        })
        .catch(error => {
          window.alert(error);
          return;
        }); 

        const newInstruction:any= allInstructions.filter(( instruction )=> {
          return instruction!== targeInstruction;
        });
        setAllInstructions(newInstruction)
       
      }else{
        return 
      }
    }
 
  return (
    <div className='recipe_page' >
      <header>
        <h1>    {recipe.name}  </h1>
      </header>
        <div className="container">

            <section id='left_section'>
                <img src={recipe.image} alt="img" />
            </section>
            <section id='right_section'>
                <h3>Description</h3>
                <p>{recipe.description}</p>
                <h3>Ingredients</h3>
                <ul id="description">
                {allIngredients.map((ingredient:string, index)=>
                    <li className="list_item" id={ingredient} onClick={e=>deleteIngredient(e)} key={index}>{ingredient}</li>
                )}
                </ul>
                <input
                    placeholder="2 cups of spinach"
                    value={newIngredient}  
                    onChange={(e: any) => {  
                        setNewIngredient(e.target.value);
                    }}
                    />
              
                <button onClick={addIngredient}>Add Ingredient</button>

                <h3>Instructions</h3>
                <ol>
                {allInstructions.map((instruction:string, index)=>
                    <li className='list_item' id={instruction} onClick={e=>deleteInstruction(e)} key={index}>{instruction}</li>
                )} 
                </ol>
                <input
                    placeholder="Instruction in detail..."
                    value={newInstruction}  
                    onChange={(e: any) => {   
                        setNewInstruction(e.target.value);
                    }}
                    />
              
                <button onClick={addInstruction}>Add Instruction</button>

            </section>
        </div>
	  </div>
  );
}
