import { useParams } from 'react-router-dom';
import recipeData from '../recipeData';

function RecipePage() {
    const { name } = useParams();
    const recipe = recipeData.find(i => i.url === name); {/* Finds recipe corresponding to url */}
    if (recipe === undefined) { return (<p>Page not found</p>)} {/* Returns Page Not Found if no recipe corresponds to url */}
    return (
        <body>
        <header>
            {/* Will now use recipe.[property] to grab all necessary info about the recipe */}
            <h2>{recipe.name}</h2>
            <p>{recipe.desc}</p>
        </header>
        <main>
            <div className="flex-container-recipes">
                <img src={recipe.image} alt={recipe.alt}/>
                <div className="text">
                    <p><i><b>Ingredients:</b></i></p>
                    <ul>
                        {/* Recipe ingredients stored in array, maps each step to item in list */}
                        {recipe.ingredients.map(ing => (
                            <li>{ing}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex-container-recipes">
                <div className="text steps">
                    <p><i><b>Steps:</b></i></p>
                    <ul>
                        {/* Recipe steps stored in array, maps each step to item in list */}
                        {recipe.steps.map(step => (
                            <li>{step}</li>
                        ))}
                    </ul>
                    <a href={recipe.source} target="_blank"><u>Recipe Source</u></a>
                </div>
            </div>
        </main>
        </body>
    )
}

export default RecipePage;