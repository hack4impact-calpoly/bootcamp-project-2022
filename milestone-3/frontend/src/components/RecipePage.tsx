import '../recipe.css'
import recipes from '../recipeData.json';
import { useParams } from "react-router-dom";

/*
<ul>
        {groceries.map((g) => (
          <li>{g}</li>
        ))}
      </ul>
*/

function RecipePage() {
    let param = useParams();
    console.log(param.name);
    
    let recipe = recipes.find((r) => r.path === param.path)

    if(recipe) {
        return (
            <body>
                <div className="center-image">
                <img src={recipe.image} />
                </div>
                <h2>{recipe.name}</h2>
    
                <h3>Ingredients</h3>
    
                <ul>
                    {recipe.ingredients.map((i) => (<li>{i}</li>))}
                </ul>
    
                <h3>Preparation + Instructions</h3>
    
                <ol>
                    {recipe.instructions.map((instr) => (<li>{instr}</li>))}
                </ol>
    
            </body>
        )
    }
    else {
        return(<div></div>);
    }
    
}

export default RecipePage;

