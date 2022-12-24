import '../App.css';
import { ChangeEvent, useState, useEffect } from 'react';
import recipes from '../recipeData';
import { useParams } from 'react-router-dom';


interface RecipePage {
    external?: boolean;
}

export default function RecipePage(props: RecipePage) {

    const { id } = useParams();
    const [recipe, setRecipe] = useState({ name: "", description: "", image: "", ingredients: [""], instructions: [""] })
    const [ingredients, setIngredients] = useState(recipe ? recipe.ingredients : [""])
    const [newIngredient, setNewIngredient] = useState("");
    const [instructions, setInstructions] = useState(recipe ? recipe.instructions : [""])
    const [newInstruction, setNewInstruction] = useState("");

    function handleChangeIngredient(event: ChangeEvent<HTMLInputElement>) {
        setNewIngredient(event.currentTarget.value);
    }
    function handleChangeInstruction(event: ChangeEvent<HTMLInputElement>) {
        setNewInstruction(event.currentTarget.value);
    }



    useEffect(() => {
        if (props.external) {
            fetch("https://bootcamp-milestone-4.onrender.com/recipe/" + id)
                .then((res) => res.json())
                .then((data) => {
                    setRecipe(data[0]);
                    setIngredients(data[0].ingredients);
                    setInstructions(data[0].instructions);
                })
        }

        else {
            let data = recipes.find(x => x.name == id)
            setRecipe(data ? data : { name: "", description: "", image: "", ingredients: [""], instructions: [""] })
            if (data) {
                setRecipe(data)
                setIngredients(data.ingredients)
                setInstructions(data.instructions)
            }
        }
    }, [id, props.external]);


    return (

        <div className="recipe_card">

            
            <img className="recipeImage" src={recipe.image} alt="Omellete" />
            <div className="recipe_page_content">
                <h1 className="recipe_page_title">{recipe.name}</h1>
                <p>{recipe.description}</p>

                <div className="recipe_card_ip">

                    {/* ingredients */}
                    <div>
                        <h2>Ingredients</h2>
                        <ul>
                            {ingredients.map(ingredient => <li>{ingredient}</li>)}
                        </ul>
                        <div>
                            <h4> Add Ingredient:</h4>
                            <div>
                                <input placeholder="3 tbsp of salt" value={newIngredient} onChange={handleChangeIngredient} />
                                <button onClick={() => setIngredients([...ingredients, newIngredient])}> Add Ingredient </button>
                            </div>
                        </div>
                    </div>

                    {/* instructions */}
                    <div>
                        <h2>Instructions</h2>
                        <ul>
                            {instructions.map(instructions => <li>{instructions}</li>)}
                        </ul>
                        <div>
                            <h4> Add Instruction:</h4>
                            <div>
                                <input placeholder="add the salt" value={newInstruction} onChange={handleChangeInstruction} />
                                <button onClick={() => setInstructions([...instructions, newInstruction])}> Add Instruction </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
RecipePage.defaultProps = {
    external: false,
};


