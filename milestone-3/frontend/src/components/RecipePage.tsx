import "./recipePreview.css";
import { ChangeEvent, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
interface RecipePage {
  external?: boolean;
}

export default function RecipePage(props: RecipePage) {
  let [ingredients, setIngredients] = useState<String[]>([""]);
  let [newIngredient, setNewIngredient] = useState("");
  let [instructions, setInstructions] = useState<String[]>([""]);
  let [newInstruction, setNewInstruction] = useState("");
  let [recipe, setRecipe] = useState({
    name: "",
    description: "",
    image: "",
    ingredients: [],
    instructions: [],
  });
  let { name } = useParams(); //returns objects and destructure to name
  console.log(name);
  console.log("Ingredients", ingredients);
  useEffect(() => {
    if (props.external) { //if true, then external
      fetch("https://bootcamp-milestone-4.onrender.com/recipe/" + name) //fetch on ryan's api
        .then((res) => res.json()) //return response from fetch to json
        .then((data) => { //json returned, we take list of objects, get first object, and set to recipe object
          setRecipe(data[0]);
        });
    } else { //personal recipe -- take from my endpoints made in backend
      fetch("http://localhost:3001/recipe/" + name)
        .then((res) => res.json())
        .then((data) => {
          setRecipe(data[0]);
        });
    }
  }, [props.external]);//runs anytime props.external is updated

  useEffect(()=>{
    setIngredients(recipe.ingredients);
    setInstructions(recipe.instructions);
    console.log("Recipe", recipe);
    console.log("Ingredients", recipe.ingredients);
  }, [recipe] // run when recipe is updated
  )
  
  function addIngredient(event: ChangeEvent<HTMLInputElement>) {
    setNewIngredient(event.currentTarget.value);
  }
  function addIngredients() {
    fetch("http://localhost:3001/recipe/" + name + "/ingredients", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        value: newIngredient,
        position: ingredients.length,
      }),
    }).catch((error: any) => console.log(error));
    setIngredients([...ingredients, newIngredient]);
    console.log(ingredients);
  }

  function addInstruction(event: ChangeEvent<HTMLInputElement>) {
    setNewInstruction(event.currentTarget.value);
  }
  function addInstructions() {
    fetch("http://localhost:3001/recipe/" + name + "/instructions", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        value: newInstruction,
        position: instructions.length,
      }),
    }).catch((err: any) => console.log(err));
    setInstructions([...instructions, newInstruction]);
  }
  
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <div className="flex-container">
      <img className="large-image" src={recipe.image} alt="img" />
      <div className="flex-content">
        <h1> {name}</h1>
        <p>{recipe.description}</p>
        <h2>Ingredients</h2>
        <ul>
          <input
            value={newIngredient} // add newIngredient as the input's value
            onChange={addIngredient}
          />
          <button onClick={addIngredients}>Add ingredient</button>
          {/* <button onClick={() => setIngredients([...ingredients, newIngredient])}>Add ingredient</button> */}
          {ingredients?.map(function (ingredient, index) {
            return <li key={index}>{ingredient}</li>;
          })}
        </ul>
        <h2>Instructions</h2>
        <ol>
          <input
            value={newInstruction} // add newIngredient as the input's value
            onChange={addInstruction}
          />
          <button onClick={addInstructions}>Add instruction</button>
          {instructions?.map(function (instruction, index) {
            return <li key={index}>{instruction}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}
