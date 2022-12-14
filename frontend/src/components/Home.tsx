import "../App.css"
import RecipePreview from "./RecipePreview"
import recipeData from "../recipeData.json"
import { useState, useEffect } from "react"

interface Recipe {
	name: string
	image: string
	description: string
}

function Home() {
	const [externalRecipes, setExternalRecipes] = useState<Recipe[]>(recipeData)
	useEffect(() => {
		fetch("https://localhost:3001/recipe")
			.then((res) => res.json())
			.then((data) => setExternalRecipes([...externalRecipes, ...data]))
	}, [])

	return (
		<main>
			<h1 className="fanpage">
				This is first and most importantly a Claire Saffitz fan page
			</h1>
			{externalRecipes.map((recipe) => (
				<RecipePreview
					name={recipe.name}
					image={recipe.image}
					description={recipe.description}
				/>
			))}
		</main>
	)
}

export default Home
