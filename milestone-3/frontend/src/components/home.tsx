import {RecipePreview} from './RecipePreview';
import recipe_list from '../recipeData';
import '../App.css';
import { Link } from 'react-router-dom';
function Home(){
    return(

       <main>
      <>
      <div className="main_header">
        <h1>Welcome to <span className="text--purple"> OnlyPotatoes!</span></h1>
      </div>
      {recipe_list.map((recipe) =>(
        <RecipePreview
        name={recipe.name}
        description={recipe.description}
        image={recipe.image}
        ingredients={recipe.ingredients}
        instructions={recipe.instructions}
            />
      ))}
      </>


    </main>
    )

}

export default Home