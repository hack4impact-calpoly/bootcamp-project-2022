import { useParams } from "react-router-dom"
import recipeData from "../recipeData.json"
import RecipePreview from "./RecipePreview"
import "../recipe.css"
import React, { ChangeEvent, useEffect, useState } from "react"

interface Recipe {
	name: string
	image: string
	description: string
	ingredients: string[]
	instructions: string[]
}

function RecipePage() {
	const [externalRecipes, setExternalRecipes] = useState<Recipe[]>(recipeData)
	const [newIngredient, setNewIngredient] = useState("")
	const [newInstruction, setNewInstruction] = useState("")

	useEffect(() => {
		fetch("https://localhost:3001/recipe")
			.then((res) => res.json())
			.then((data) => setExternalRecipes([...externalRecipes, ...data]))
	}, [])

	let param = useParams()
	console.log(param.name)

	let recipe = externalRecipes.find((r) => r.name === param.name)
	console.log(recipe)

	const [allIngredients, setAllIngredients] = useState(
		recipe ? recipe.ingredients : []
	)

	const [allInstructions, setAllInstructions] = useState(
		recipe ? recipe.ingredients : []
	)

	return (
		<div>
			<RecipePreview
				name={recipe!.name}
				image={recipe!.image}
				description={recipe!.description}
			/>
			<div className="body">
				<div className="section1">
					<h2>Ingredients</h2>
					<ul>
						{allIngredients.map((item) => {
							return <li>{item}</li>
						})}
					</ul>
					<input
						value={newIngredient}
						onChange={(e: ChangeEvent<HTMLInputElement>) => {
							setNewIngredient(e.target.value)
						}}
					/>

					<button
						onClick={() =>
							setAllIngredients([...allIngredients, newIngredient])
						}
					>
						Add Ingredient
					</button>
				</div>
				<div className="section2">
					<h2>Instructions</h2>
					<ol>
						{allInstructions.map((item) => {
							return <li>{item}</li>
						})}
					</ol>
					<input
						value={newInstruction}
						onChange={(e: ChangeEvent<HTMLInputElement>) => {
							setNewInstruction(e.target.value)
						}}
					/>
					<button
						onClick={() =>
							setAllInstructions([...allInstructions, newInstruction])
						}
					>
						Add Ingredient
					</button>
				</div>
			</div>
		</div>
	)
}

export default RecipePage
