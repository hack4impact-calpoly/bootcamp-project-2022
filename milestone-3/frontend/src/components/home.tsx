import {RecipePreview} from './RecipePreview';
import recipe_list, { Recipe } from '../recipeData';
import '../App.css';
import { useState }  from 'react';
import { useEffect } from 'react';
function Home(){
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/recipe")
      .then((response) => response.json()).then((recipeData) => {
        setRecipes(recipeData);
      })
      .catch((err) => console.log(err));
  }, []);

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
        external = {false}
            />
          
      ))}
      </>


    </main>
    )

}

export default Home