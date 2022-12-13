import { useParams } from "react-router-dom";
import recipeData, {Recipe} from "../recipeData"
import {useState, useEffect, ChangeEvent} from "react";

interface RecipePageProps {
    external?: boolean;
}

function RecipePage(props: RecipePageProps) {
    let {id} = useParams();
    
    const[recipe, setRecipe] = useState<Recipe>({
        name: "",
        description: "",
        image: "",
        ingredients: [],
        instructions: [],
    })

    const [allIngredients, setAllIngredients] = useState(recipe.ingredients);
    const [newIngredient, setNewIngredient] = useState('');
    
    const [allInstructions, setAllInstructions] = useState(recipe.instructions)
    const [newInstruction, setNewInstruction] = useState('');

    useEffect(() => {
        if (props.external) {
            fetch("https://bootcamp-milestone-4.onrender.com/recipe/" + id?.replace(/ /g, "%20"))
            .then((res) => res.json())
            .then((data) => setRecipe(data[0]))
        }
        else{
            setRecipe(recipeData.find((recipe) => recipe.name === id) || recipeData[0])
        }
    }, [props.external, id])

    useEffect(() => {
        setAllIngredients(recipe.ingredients);
        setAllInstructions(recipe.instructions);
    }, [recipe]);
    
    // creates items on webpage depending on recipe
    if (recipe){
        return(
        <main>
            <div className = "flex-container">
                <div>
                    <img className="flex-image" src={recipe.image} alt={recipe.name} />
                </div>
                <div className= "flex-content">
                    <h1>{recipe.name}</h1>
                    <p>
                        {recipe.description}
                    </p>
                    {/* displays all the ingredients */}
                    <h2>Ingredients</h2>
                    {allIngredients.map(ingredient =>
                        <li key="{ingredient}">{ingredient}</li>)}

                    <p>Add a new ingredient: </p>
                    <input placeholder = "2 cups of spinach"
                    value={newIngredient} // add newIngredient as the input's value
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      // this event handler updates the value of newIngredient
                      setNewIngredient(e.target.value);
                    }}
                  />
                  <button onClick={() => {setAllIngredients([...allIngredients, newIngredient]);
                     }}>
                        Add Ingredient
                    </button>
                </div>  
            </div>
            <h2>Preparation</h2>
            <ol>
                {/* displays the instructions in an ordered list */}
                {allInstructions.map(instruction =>
                    <li key="{instruction}">{instruction}</li>)}
            </ol>
            <p>Add a new instructions: </p>
            <input placeholder = "bake at 375 degrees"
            value={newInstruction}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setNewInstruction(e.target.value);
            }}
            />
            <button onClick={() => {setAllInstructions([...allInstructions, newInstruction])}}>
                Add Instruction
            </button>
        </main>
        )
    }
    else{
        return (<div></div>)
    }
}

export default RecipePage;