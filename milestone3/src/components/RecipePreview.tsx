import { Link } from "react-router-dom"

interface Recipe {
	path: string
	name: string
	image: string
	desc: string
}

function RecipePreview(props: Recipe) {
	console.log(props)
	return (
		<div className="recipes">
			<img className="cakePics" src={props.image} alt="secret cake pic" />
			<div className="contentBlock">
				<Link className="recipeButton" to={"/recipe/" + props.path}>
					{props.name}
				</Link>
				<p className="summary">{props.desc}</p>
			</div>
		</div>
	)
}

export default RecipePreview
