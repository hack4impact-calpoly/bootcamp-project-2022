import "../About.css"

function About() {
	return (
		<div>
			<h1 className="subtitle">Lets get baked</h1>
			<div className="proof">
				<img
					className="proofpics"
					src="https://github.com/lallen15/bootcamp-project-2022/blob/main/src/img/IMG_8356.JPG?raw=true"
					alt="secret cake pic"
				/>
				<img
					className="proofpics"
					src="https://github.com/lallen15/bootcamp-project-2022/blob/main/src/img/IMG_8355.JPG?raw=true"
					alt="secret cake pic"
				/>
				<img
					className="proofpics"
					src="https://github.com/lallen15/bootcamp-project-2022/blob/main/src/img/IMG_8357.JPG?raw=true"
					alt="secret cake pic"
				/>
				<h3 className="prooftext">
					My mom and I making a couple wedding cakes.
					<br />
					The cakes included on this site are the favorite cakes of my
					roommates.
					<br />
					Stress baking is one of my favorite hobbies.
					<br /> Hit me up for a custom cake!
				</h3>
			</div>
		</div>
	)
}

export default About
