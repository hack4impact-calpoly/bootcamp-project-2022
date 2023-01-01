import '../App.css';
import { ChangeEvent, useState, useEffect } from 'react';
import { Recipe } from '../recipeData';
import { useParams } from 'react-router-dom';
import { createNoSubstitutionTemplateLiteral } from 'typescript';


export default function RecipePage() {

    const [recipe, setRecipe] = useState<Recipe>({
        name: "",
        image: "",
        description: "",
        ingredients: [],
        instructions: []
    });
    const { name } = useParams();

    const [newIngredient, setNewIngredient] = useState('');
    const [allIngredients, setIngredients] = useState(recipe.ingredients);
    const [newInstruction, setNewInstruction] = useState('');
    const [allInstructions, setInstructions] = useState(recipe.instructions);

    useEffect(() => {
        fetch("http://localhost:3001/recipe/" + name)
            .then((response) => response.json())
            .then(recipeData => {
                const data = recipeData[0];
                setRecipe(data)
                setIngredients(data.ingredients)
                setInstructions(data.instructions)
            })
            .catch(err => console.log(err))
    }, [name]);

    const addInstruction = () => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newInstruction })
        }
        fetch("http://localhost:3001/recipe/" + name + "/instruction", requestOptions)
            .then(res => console.log(res));
        setInstructions([...allInstructions, newInstruction]);
    }

    const addIngredient = () => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newIngredient })
        }
        console.log(requestOptions)
        fetch("http://localhost:3001/recipe/" + name + "/ingredient", requestOptions)
            .then(res => console.log(res));
        setIngredients([...allIngredients, newIngredient]);
    }

    return (

        <div className="recipe_card">
            <img className="recipeImage" src={recipe.image} alt={recipe.name} />
            <div className="recipe_page_content">
                <h1 className="recipe_page_title">{recipe.name}</h1>
                <p>{recipe.description}</p>

                <div className="recipe_card_ip">

                    {/* ingredients */}
                    <div>
                        <h2>Ingredients</h2>
                        <ul>
                            {allIngredients.map(function (name, index) {
                                return <li key={index}>{name}</li>;
                            })}
                        </ul>
                        <div>
                            <h4> Add Ingredient:</h4>
                            <div>
                                <input placeholder="3 tbsp of salt" value={newIngredient} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    setNewIngredient(e.target.value);
                                }} />
                                <button onClick={
                                    addIngredient
                                }> Add Ingredient </button>
                            </div>
                        </div>
                    </div>

                    {/* instructions */}
                    <div>
                        <h2>Instructions</h2>
                        <ol>
                            {allInstructions.map(function (name, index) {
                                return <li key={index}>{name}</li>;
                            })}
                        </ol>
                        <div>
                            <h4> Add Instruction:</h4>
                            <div>
                                <input placeholder="add the salt" value={newInstruction} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    setNewInstruction(e.target.value);
                                }} />
                                <button onClick={
                                    addInstruction
                                }> Add Instruction </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}


