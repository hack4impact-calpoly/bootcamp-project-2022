import { useParams } from "react-router-dom";
import recipes from "../recipeData";
import { ChangeEvent, useState, useEffect } from "react";
interface RecipePageProps {
  external?: boolean;
}

export default function RecipePage(props: RecipePageProps) {
  const params = useParams();

  const [recipe, setRecipe] = useState(
    recipes.find((x) => x.name === params.id) //default is non-external Recipe | undefined
  );

  const [newIngredient, setNewIngredient] = useState(""); //add this
  const [allIngredients, setAllIngredients] = useState(recipe?.ingredients);

  const [newInstruction, setNewInstruction] = useState("");
  const [allInstructions, setAllInstructions] = useState(recipe?.instructions);

  useEffect(() => {
    if (props.external) {
      fetch(`https://bootcamp-milestone-4.onrender.com/recipe/${params.id}`)
        .then((res) => res.json())
        .then((data) => setRecipe(data[0]));
    }
    //no else - initialized to internal | undefined as default
  }, [params.id, props.external]);

  //need this because page doesnt render recipe.ingredients/instructions, uses predifined array above
  useEffect(() => {
    setAllIngredients(recipe?.ingredients);
    setAllInstructions(recipe?.instructions);
  }, [recipe]);

  return (
    <main>
      <div className="flex-container">
        <div>
          <img
            className="flex-image"
            src={recipe?.image}
            alt={recipe?.name}
          ></img>
        </div>
        <div className="flex-content">
          <h1>{recipe?.name}</h1>
          <p>{recipe?.description}</p>
          <h2>Ingredients</h2>
          <ul>
            {allIngredients?.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
          <input
            placeholder="new ingredient"
            value={newIngredient} // add newIngredient as the input's value
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              // this event handler updates the value of newIngredient
              setNewIngredient(e.target.value);
            }}
          />
          <button
            onClick={() =>
              setAllIngredients([...(allIngredients ?? []), newIngredient])
            }
          >
            Add Ingredient
          </button>
        </div>
      </div>
      {/* <!-- instructions list --> */}
      <h2>Instructions</h2>
      <ol>
        {allInstructions?.map((instruction) => (
          <li>{instruction}</li>
        ))}
      </ol>
      <input
        placeholder="new instruction"
        value={newInstruction} // add newIngredient as the input's value
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          // this event handler updates the value of newIngredient
          setNewInstruction(e.target.value);
        }}
      />
      <button
        onClick={() =>
          setAllInstructions([...(allInstructions ?? []), newInstruction])
        }
      >
        Add Instruction
      </button>
    </main>
  );
}

RecipePage.defaultProps = {
  external: false,
};

// npx prettier --write "src/components/RecipePage.tsx"
