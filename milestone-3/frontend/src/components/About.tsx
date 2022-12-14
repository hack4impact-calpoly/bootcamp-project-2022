import image from '../images/aboutmePicture.jpg'
function About(){
    return (
        <main className="about-me recipe">
        <h1 className="recipe-header-page">About Me</h1>
        <p className="main_header ">
          Name: &nbsp; <span className="text--purple"> Thomas Panyasrivinit </span>
        </p>
        <p className="main_header">
          Occupation: &nbsp; <span className="text--purple">Fidget Spinnerer</span>
        </p>
        <img
          className="about-me-img"
          src={image}
          alt="handsome extremely talented picture of gentleman"
        />
      </main>
    )
}

export default About