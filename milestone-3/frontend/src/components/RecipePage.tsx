import { useParams } from "react-router-dom"
import recipe_list from '../recipeData';

function RecipePage(){
    const {id} = useParams();
    const recipe= recipe_list.find(recipe=> recipe.name === id)
    if(recipe){
    return(
        <body>
        <div className="entire-page">
          <h1 className="recipe-header-page main_header">
            {recipe.name}
          </h1>
          <div className="recipe-page-first">
            <img
              src={require(recipe.image)}
              alt={recipe.name}
              className="big-img"
            />
            <div className="recipe-desc-ingr">
              <p className="card-desc-page">
                {recipe.description}
              </p>
    
              <div className="ingredients">
                <div className="ingredient-body">
                  <h2 className="text--purple recipe-header-page main_header">
                    Ingredients
                  </h2>
                  <ul>
                    {recipe.ingredients.map(ingredient=>(
                        <li>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="instructions">
            <h2 className="text--purple main_header recipe-header-page">
              Instructions
            </h2>
            <ol>
            {recipe.instructions.map(instruction=>(
                        <li>{instruction}</li>
                    ))}
            </ol>
          </div>
        </div>
      </body>
)}
else{
    return(
        <h1>Sorry this recipe doesn't exist!</h1>
    )
}}

export default RecipePage