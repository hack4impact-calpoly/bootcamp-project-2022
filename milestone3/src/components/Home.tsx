import "../App.css"
import RecipePreview from "./RecipePreview"
import recipeData from "../recipeData.json"

function Home() {
	return (
		<main>
			<h1 className="fanpage">
				This is first and most importantly a Claire Saffitz fan page
			</h1>
			{recipeData.map((recipe) => (
				<RecipePreview
					path={recipe.path}
					name={recipe.name}
					image={recipe.image}
					desc={recipe.desc}
				/>
			))}
		</main>
	)
}

export default Home
