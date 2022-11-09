import { useParams } from "react-router-dom"
import recipeData from "../recipeData.json"
import RecipePreview from "./RecipePreview"
import "../recipe.css"

function RecipePage() {
	let param = useParams()
	console.log(param.path)

	let recipe = recipeData.find((r) => r.path === param.path)
	console.log(recipe)
	if (!recipe) {
		return <div></div>
	}
	return (
		<div>
			<RecipePreview
				path={recipe.path}
				name={recipe.name}
				image={recipe.image}
				desc={recipe.desc}
			/>
			<div className="body">
				<div className="section1">
					<h2>Ingredients</h2>
					<ul>
						{recipe.ingredients.map((item) => {
							return <li>{item}</li>
						})}
					</ul>
				</div>
				<div className="section2">
					<h2>Instructions</h2>
					<ol>
						{recipe.instructions.map((item) => {
							return <li>{item}</li>
						})}
					</ol>
				</div>
			</div>
		</div>
	)
}

export default RecipePage
