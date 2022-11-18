import { Link } from "react-router-dom"

interface Recipe {
	name: string
	image: string
	description: string
}

function RecipePreview(props: Recipe) {
	console.log(props)
	return (
		<div className="recipes">
			<img className="cakePics" src={props.image} alt="secret cake pic" />
			<div className="contentBlock">
				<Link className="recipeButton" to={"/recipe/" + props.name}>
					{props.name}
				</Link>
				<p className="summary">{props.description}</p>
			</div>
		</div>
	)
}

export default RecipePreview
