import recipeData, { Recipe } from "../recipeData";
import './RecipePage.css';
import { useParams } from "react-router-dom";
import { useState, ChangeEvent, useEffect } from 'react';

interface RecipePageProps {
    external: boolean;
}

export default function RecipePage(props: RecipePageProps) {
    const { name } = useParams();
        
    const [recipes, setRecipes] = useState<Recipe>({
        name: "",
        description: "",
        image: "",
        ingredients: [],
        instructions: [],
    });
    
    const [newIngredient, setNewIngredient] = useState('');
    const [allIngredients, setAllIngredients] = useState(recipes.ingredients);
    const [newInstruction, setNewInstruction] = useState('');
    const [allInstructions, setAllInstructions] = useState(recipes.instructions);

    useEffect(() => {
        if (props.external) {
            fetch('https://bootcamp-milestone-4.onrender.com/recipe/' + name)
            .then((res) => res.json())
            .then((data) => setRecipes(data[0]))
        } else {
            const rec = recipeData.find(recipe => recipe.name === name)!;
            setRecipes(rec)
        }
    }, [name, props.external]);

    useEffect(() => {
        setAllIngredients(recipes.ingredients);
        setAllInstructions(recipes.instructions);
    }, [recipes]);

    return (
    <div>
        <div className="pg-content" >
            {/* recipe preview card */}
            <div className="cards" >
                <img className="card-img" src={recipes.image} />
                    <div className="card-body">
                        <p className="button">{recipes.name}</p>
                        <p>{recipes.description}</p>
                </div>
            </div>
            {/* recipe instructions */}
            <div className="prep">
                <div className="ingredients">
                    <p className="instruction-btn">Ingredients</p>
                    <ul>
                        {allIngredients.map((ingredient, index)=>
                        <li key={index}>{ingredient}</li>)}
                    </ul>
                </div>
                <div className="instructions">
                    <p className="instruction-btn">Instructions</p>
                    <ol>
                         {allInstructions.map((instruction, index)=>
                        <li key={index}>{instruction}</li>)} 
                    </ol>
                </div>
            {/* add ingredients */}
            <div className="adding">
                <div className="add">
                    <p className="add-title">Add an Ingredient</p>
                    <div>
                        <label>Ingredient: </label>
                        <input 
                            placeholder=" 2 cups of spinach"
                            value={newIngredient} 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setNewIngredient(e.target.value);
                            }}
                        />
                    </div>
                    <button
                        onClick={() => 
                        setAllIngredients([...allIngredients, newIngredient])}>
                        Add Ingredient
                    </button>
                </div>
                {/* add instructions */}
                <div className="add">
                    <p className="add-title">Add an Instruction</p>
                    <div>
                        <label>Instruction: </label>
                        <input 
                            placeholder=" Chop 4 carrots"
                            value={newInstruction} 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setNewInstruction(e.target.value);
                            }}
                        />
                    </div>
                    <button
                        onClick={() => 
                        setAllInstructions([...allInstructions, newInstruction])}>
                        Add Instruction
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>   
);}

RecipePage.defaultProps = {
  external: false,
};


