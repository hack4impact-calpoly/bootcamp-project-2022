import React, { useState, ChangeEvent, useEffect } from 'react';
import './recipePage.css';
import { useParams } from 'react-router-dom';
import { Recipe } from '../recipeData';

interface RecipeProps{
    recipeProps: Recipe[];
    external?: boolean;
}

export default function RecipePage( props : RecipeProps ) {
    const { id } = useParams();
    const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
    const [newIngredient, setNewIngredient] = useState('');
    const [allIngredients, setAllIngredients] = useState(["recipe.ingredients"]);
    const [newInstruction, setNewInstruction] = useState('');
    const [allInstructions, setAllInstructions] = useState(["recipe.instructions"]);
    //list of recipes not fetched from API, used to check to see if state variables need to be updated once external recipes are fetched
    const nonExternalRecipes = [...props.recipeProps]
    // on the click of the "add ingredients" button, the ingredient in the input box is destructed into the list of all ingredients
    const setIngredientsClick = () => {
        setAllIngredients([...allIngredients, newIngredient]);
    }
    // updates every change made in the add ingredients text box, but does not add them to the list of all ingredients 
    const handeOnChangeNewIngredient = (e: ChangeEvent<HTMLInputElement>) => {
        // this event handler updates the value of newIngredient
        setNewIngredient(e.target.value);
    }
    // these two do the same thing as the ingredients functions above, but with instruction list instead
    const setInstructionsClick = () => {
        setAllInstructions([...allInstructions, newInstruction]);
    }
    const handeOnChangeNewInstruction = (e: ChangeEvent<HTMLInputElement>) => {
        // this event handler updates the value of newInstruction
        setNewInstruction(e.target.value);
    }
    useEffect(() => {
        if(props.external){
            fetch("https://bootcamp-milestone-4.onrender.com/recipe")
                .then((res) => res.json())
                .then((data) => setExternalRecipes(data));
        } 
    }, [id, props.external]);
    // seing as all recipe data is passed in, the recipe shown is only the one whose name matches the id passed in from the url w/ useParams()
    const recipes = ([...props.recipeProps,...externalRecipes])
    let recipe = recipes.find(r => id === r.name);
    // updates state variables of ingredients and instructions once external recipes have been fetched (checks by comparing current recipe list to a variable created composed entirely of "local" recipes)
    useEffect(() => {
        if(recipes !== nonExternalRecipes){
            recipe = recipes.find(r => id === r.name);
            if(recipe){
                setAllIngredients([...recipe.ingredients]);
                setAllInstructions([...recipe.instructions]);
            }   
        }
    }, [recipe])
    if (!recipe){
        // sets recipe equal to a default, it should instead return some default webpage but I can't do that because then the state variables will break
        recipe = {name: "default", description: "default", image: "default", ingredients: ["default"], instructions: ["default"]}
    }

    // dynamic list items for each ingredients in each recipe's list
    let ingredientList = allIngredients.map((name, index) => (
        <li key = {index}>{name}</li>
    ));
    let instructionList = allInstructions.map((name, index) => (
        <li key = {index}>{name}</li>
    ));

    return (
        <div>
            <div className = "recipe_page_flex">
                <div className = "name_description_ingredients">
                    <h2 className = "recipe_page_text"> {recipe.name} </h2>
                    <p className = "recipe_page_text">  {recipe.description} </p>
                    <h3 className = "ingredient_accent"> Ingredients </h3>
                    <div className = "prep_and_list_margin">
                        <div className = "recipe_page_add_elements">
                            <input
                                placeholder="1 cup of chocolate chips"
                                value = {newIngredient} // add newIngredient as the input's value
                                onChange={handeOnChangeNewIngredient}
                            />
                            <button onClick={setIngredientsClick}>
                                Add Ingredient
                            </button>
                        </div>
                        <ul className = "recipe_page_text">
                            {ingredientList}
                        </ul>
                    </div>
                </div>
                <img className = "food_full_size" src = {recipe.image}/>
            </div>
            <div className = "prep_and_list_margin">
                <h3 className = "preparation_accent"> Preparation </h3>
                <div className = "recipe_page_add_elements">
                        <input
                            placeholder="Add chocolate chips"
                            value = {newInstruction} // add newInstruction as the input's value
                            onChange={handeOnChangeNewInstruction}
                        />
                        <button onClick={setInstructionsClick}>
                            Add Instruction
                        </button>
                    </div>
                <ol className = "recipe_page_text">
                    {instructionList}
                </ol>
            </div>
        </div>
    );
}

RecipePage.defaultProps = {
    external: false
};
