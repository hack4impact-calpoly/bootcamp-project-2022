import { useParams } from "react-router-dom";
import recipes, { Recipe } from "../recipeData";
import "./recipePage.css";
import { Link } from "react-router-dom";
import React, { ChangeEvent, useEffect, useState } from "react";
import { isButtonElement } from "react-router-dom/dist/dom";
import RecipePreview from "./recipePreview";

// interface RecipePageProps {
//   external?: boolean;
//   // other props
// }


const RecipePage = () => {
  const { id } = useParams();
  const [newIngredient, setNewIngredient] = useState("");
  const [newProcedure, setNewProcedure] = useState("");
  const [allIngredients, setAllIngredients] = useState<string[]>([]);
  const [allProcedures, setAllProcedures] = useState<string[]>([]);

  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
  const [allRecipes, setAllRecipes] = useState<Recipe[]>(recipes);
  const [recipe, setRecipe] = useState<Recipe>();
  useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
      .then((res) => res.json())
      .then((data) => {
        setExternalRecipes(data);
        return data;
      })
      .then((data) => {
        setAllRecipes([...allRecipes, ...data]);
      })
  }, []);

  useEffect(() => {
    let i = allRecipes.find((x) => x.name === id);
    setRecipe(
      i
        ? i
        : {
            name: "",
            description: "",
            image: "",
            ingredients: [],
            instructions: [],
          }
    )
    console.log(recipe);
    if (recipe) {
        setAllIngredients(recipe.ingredients);
        setAllProcedures(recipe.instructions);
    }
  }, [allRecipes])

// useEffect(() => {
//   setAllIngredients(recipe.ingredients)
//   setAllProcedures(recipe.instructions)
// }, [allRecipes]);

  

// export default function RecipePage(props: RecipePageProps) {
  
//   const [allIngredients, setAllIngredients] = useState([]);
//   const [allProcedures, setAllProcedures] = useState([]);
// //   // const [externalRecipe, setexternalRecipe] = useState("");
// //   const { _id } = useParams();
//   const [newIngredient, setNewIngredient] = useState("");
//   const [newProcedure, setNewProcedure] = useState("");
//   // useEffect(() => {
//   //   if (props.external) {
//   //     // make an API call with the url param & setRecipe
//   //     fetch("https://bootcamp-milestone-4.onrender.com/recipe/" + _id)
//   //       .then((res) => res.json())
//   //       .then(data => {   setexternalRecipe(data[0]);
//   //                             setAllIngredients(data[0].ingredients);
//   //                             setAllProcedures(data[0].instructions);})
      
//   //        } else {
//   //   //       // query all of your recipe data for the recipe you want & setRecipe
//         let i = recipes.findIndex((x) => x.name === _id)
//   //       if (i === undefined) {
  //         return 
  //       }
  //       else {
  //         setexternalRecipe(i);
  //         // setAllIngredients(recipes[i].ingredients);
  //         // setAllProcedures(recipes[i].instructions);
  //       } 
        

    // }
  // }; [_id, props.external];});

  // const [newIngredient, setNewIngredient] = useState("");
  // const [newProcedure, setNewProcedure] = useState("");
  // const { id } = useParams();
  // let i = recipes.findIndex((x) => x.name === id);
  // const [allIngredients, setAllIngredients] = useState(recipes[i].ingredients);
  // const [allProcedures, setAllProcedures] = useState(recipes[i].instructions);

if (!recipe) {
  return (<div></div>)
}

return (
// const RecipePage = () => {
  

//   const [externalRecipe, setexternalRecipe] = useState("");
//   const { _id } = useParams();
//   useEffect(() => {
//     // if (RecipePage.defaultProps.external) {
//       // make an API call with the url param & setRecipe
//       fetch("https://bootcamp-milestone-4.onrender.com/recipe/" + _id)
//         .then((res) => res.json())
//         .then((data) => setexternalRecipe(data[0]));
//     // } else {
//     //       // query all of your recipe data for the recipe you want & setRecipe

//     // }
//   }, [_id, RecipePage.defaultProps.external]);

  // const [newIngredient, setNewIngredient] = useState("");
  // const [newProcedure, setNewProcedure] = useState("");
  // const { id } = useParams();
  // let i = recipes.findIndex((x) => x.name === id);
  // const [allIngredients, setAllIngredients] = useState(recipes[i].ingredients);
  // const [allProcedures, setAllProcedures] = useState(recipes[i].instructions);

  // <input
  //   placeholder="1 cup flour"
  //   value={newIngredient} // add newIngredient as the input's value
  //   onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
  //     // this event handler updates the value of newIngredient
  //     setNewIngredient(e.target.value);
  //   }}
  // />;
  // <input
  //   placeholder="Preheat oven to 350 degrees"
  //   value={newProcedure} // add newProcedure as the input's value
  //   onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
  //     // this event handler updates the value of newProcedure
  //     setNewProcedure(e.target.value);
  //   }}
  // />;

  
    <p>
      <img
        className="recipe_img"
        src={recipe.image}
        alt={recipe.name}
      />

      <div className="recipe_section">
        <p className="recipe_text">{recipe.description}</p>
      </div>
      <p className="recipe_text">
        Ingredients
        <ul>
          {allIngredients.map(function (name, index) {
            return <li key={index}>{name}</li>;
          })}
        </ul>
        <input
          placeholder="3 cups flour"
          value={newIngredient} // add newIngredient as the input's value
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            // this event handler updates the value of newIngredient
            setNewIngredient(e.target.value);
          }}
        />
        <button
          onClick={() => setAllIngredients([...allIngredients, newIngredient])}
        >
          Add Ingredient
        </button>
        <p className="recipe_text">Procedure</p>
        <ol className="recipe_text">
          {allProcedures.map(function (name, index) {
            return <li key={index}>{name}</li>;
          })}
        </ol>
        <input
          placeholder="Preheat oven to 350"
          value={newProcedure} // add newIngredient as the input's value
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            // this event handler updates the value of newIngredient
            setNewProcedure(e.target.value);
          }}
        />
        <button
          onClick={() => setAllProcedures([...allProcedures, newProcedure])}
        >
          Add Instruction
        </button>
      </p>
    </p>
  );
;}

// RecipePage.defaultProps = {
//   external: false,
// };

export default RecipePage;
