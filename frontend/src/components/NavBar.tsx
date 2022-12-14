import { Link } from "react-router-dom"
import "../App.css"

function About() {
	return (
		<div className="titleBar">
			<div className="title">
				<p> Let Them Eat Cake </p>{" "}
			</div>
			<div className="barButtons">
				<Link className="bar_button" to="/">
					Home
				</Link>
				<Link className="bar_button" to="/about">
					About
				</Link>
			</div>
		</div>
	)
}

export default About
