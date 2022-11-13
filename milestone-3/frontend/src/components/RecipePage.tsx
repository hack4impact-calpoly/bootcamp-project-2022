import { Recipe } from './RecipePreview';
import { useParams } from 'react-router-dom';
import recipeData from '../recipeData';

function RecipePage() {
    const { name } = useParams();
    const recipe = recipeData.find(i => i.url === name);
    if (recipe === undefined) { return (<p>Page not found</p>)}
    return (
    <body>
    <header>
        <h2>{recipe.name}</h2>
        <p>{recipe.desc}</p>
    </header>
    <main>
        <div className="flex-container-recipes">
            <img src={recipe.image} alt={recipe.alt}/>
            <div className="text">
                <p><i><b>Ingredients:</b></i></p>
                {recipe.ingredients}
            </div>
        </div>
        <div className="flex-container-recipes">
            <div className="text steps">
                <p><i><b>Steps:</b></i></p>
                {recipe.steps}
                <a href={recipe.source} target="_blank"><u>Recipe Source</u></a>
            </div>
        </div>
    </main>
    </body>
    )
}

export default RecipePage;