import { useParams } from "react-router-dom";
import './RecipePage.css'
import { ChangeEvent, useState, useEffect } from "react";
import { Recipe } from '../recipeData';

// checking to see if external exists in other recipes (T or F)
interface RecipeProp {
    external?: boolean;
}

// all of the recipe contents and trying to remove Hu's Chews external recipes
export default function RecipePage(props: RecipeProp)
// export default function RecipePage()
{
    const [recipe, setNewRecipe] = useState<Recipe>({
        name: "",
        description: "",
        image: "",
        ingredients: [],
        instructions1: [],
    });

    // should be name of recipe
    const {id} = useParams();

    // ingredients
    const [ingredients, setIngredients] = useState(recipe.ingredients);
    const [newIngredient, setNewIngredient] = useState('');
    // instructions
    const [instructions1, setInstructions1] = useState(recipe.instructions1);
    const [newInstruction1, setNewInstruction1] = useState('');

    useEffect(() => {
        fetch("http://localhost:3001/Recipe/" + id)       
        .then((res) => res.json())
        .then((data) => {
            setIngredients(data.ingredients);
            setInstructions1(data.instructions);
            setNewRecipe(data);
            console.log(data);
            console.log(data.ingredients);
            console.log(data.instructions);
        
        })
    }, [id]);  

    function AddIngredient() {
        let address = "http://localhost:3001/Recipe/" + id + "/ingredient"
        fetch(address, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                value: newIngredient,
                position: ingredients.length
            })
        })
        .catch((error: any) => console.log(error))
        setIngredients([...ingredients, newIngredient]);
        console.log(ingredients);
    }
    function AddInstruction() {
        let address = "http://localhost:3001/Recipe/" + id + "/instruction"
        fetch(address, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                value: newInstruction1,
                position: instructions1.length
            })
        })
        .catch((error: any) => console.log(error))
        setInstructions1([...instructions1, newInstruction1]);
        console.log(instructions1);
    }

    return (
        <main>
        <div className="flex-container">
            <h3> {recipe.name} </h3>
            <p> {recipe.description}</p>
            <img className="imageIced" src={recipe.image} alt={recipe.name}/>
            <h4>Ingredient List</h4>
            <ul>
                {ingredients.map((ingred) => {
                    return <li>{ingred}</li>
                })}
               
            </ul>

            <h3>Add a new ingredient!</h3>
            <input 
                placeholder="Cinnamon"
                value={newIngredient}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setNewIngredient(e.target.value);
                }}    
            />
            <button onClick={AddIngredient}>
                Add Ingredient
            </button>

            <h4>Instructions</h4>
            <ol>
                {instructions1.map((instruct) => {
                    return <li>{instruct}</li>
                })}
            </ol>

            <h3>Add a new instruction!</h3>
            <input 
                placeholder="Reheat water"
                value={newInstruction1}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setNewInstruction1(e.target.value);
                }}    
            />
            <button onClick={AddInstruction}>
                Add new Instruction
            </button>
             
        </div>
        </main>
    )
        
}


RecipePage.defaultProps = {
    external: false
}
