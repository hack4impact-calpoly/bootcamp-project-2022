import { useParams } from "react-router-dom";
import recipeData from "../recipeData.json"

interface Recipe {
    name: string;
    image: string;
    desc: string
    ingredients: string[];
    instructions: string[];
}

function RecipePage() {
    let {id} = useParams();

    // finds index of entry with the correct recipe name
    function find_rec(data: Recipe[], name: String | undefined) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].name === name) {
                return i;
            }
        }
        return -1;
    }

    // slices string to get just the id
    if (id !== undefined){
        id = id.slice(1)
    }

    // defines variable with index from array
    let index = find_rec(recipeData, id);
 
    // creates items on webpage depending on recipe
    return(
    <main>
        <div className = "flex-container">
            <div>
                <img className="flex-image" src={recipeData[index].image} alt={recipeData[index].name} />
            </div>
            <div className= "flex-content">
                <h1>{recipeData[index].name}</h1>
                <p>
                    {recipeData[index].desc}
                </p>
                {/* displays all the ingredients */}
                <h2>Ingredients</h2>
                {recipeData[index].ingredients.map(ingredient =>
                    <li key="{ingredient}">{ingredient}</li>)}
            </div>   
        </div>
        <h2>Preparation</h2>
        <ol>
            {/* displays the instructions in an ordered list */}
            {recipeData[index].instructions.map(instruction =>
                <li key="{instruction}">{instruction}</li>)}
        </ol>
    </main>
    )
}

export default RecipePage;