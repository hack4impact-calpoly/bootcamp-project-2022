import { Recipe } from "../recipeData"
import { useParams } from "react-router-dom"
import './recipePage.css'
import { errorObject } from "../recipeData";
import NoMatch from "./NoMatch";


interface Props{
    recipes: Recipe[]
}

export default function RecipePage(props: Props){
    const {id} = useParams();
    let recipe: Recipe = errorObject;
    const recipeUndefined: Recipe | undefined = props.recipes.find((recipe) => (recipe.slug === id))
    if (recipeUndefined){
        recipe = recipeUndefined;
    }

    if (recipe === errorObject){
        return (
            <NoMatch/>
        )
    }
    else{
        return (
            <>
            <h1 className="flex-container center">{recipe.name}</h1>
            <hr/>
            <div className="flex-container">
                <div className="flex-container card larger_image">
                    <img src={recipe.image} alt="" width="100%"/>
                    <p>{recipe.description}</p>
                </div>
                <div className="flex-container card space_between border ">

                            {recipe.ingredients.map((items, index) => (
                            <>
                            <div className="ingredient">
                            <h2 className="white">{index === 0 ? 'Ingredients:': ''}</h2>
                            <h3 className="white70">{items.title}</h3>
                            <ul>
                                {items.ingredients.map((ingredient, index) => (
                                    <li>{ingredient}</li>
                                ))}
                            </ul>
                            </div>
                            </>
                                ))}
                        
                </div>
                <div id="directions" className="flex-container">
                    <div>
                        <h2>Directions:</h2>
                        <ol>
                        {recipe.instructions.map(items => (
                            <>
                            <li>{items.mainList}
                                {items.subList.map((subItem, index) => (
                                    <p key={index}>{subItem}</p>
                                ))}
                            </li>

                            </>
                        ))}
                        <li>ENJOY!</li>
                        </ol>
                    </div>
         
                </div>
            </div>
            </>
        )
    }

}