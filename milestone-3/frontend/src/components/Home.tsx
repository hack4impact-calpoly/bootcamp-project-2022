// cd my-app -> npm start
// {/* how to comment */}

import '../App.css';
import recipes from '../recipeData.json';
import RecipePreview from './ReceipePreview';


function Home() {
  return (
    <body>
        <main>
        <p id="motto">Satisfy Your Sweet Tooth With Our Simple Recipes!</p>
        {recipes.map((recipe) => (
				<RecipePreview
          path={recipe.path}
					name={recipe.name}
					image={recipe.image}
					desc={recipe.desc}
				/>
			  ))}
        </main>
    </body>
  );
}

export default Home;