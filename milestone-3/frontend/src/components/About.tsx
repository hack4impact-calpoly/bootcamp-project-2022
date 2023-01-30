import '../App.css';
import foodPic4 from "../images/gettyimages-1081422898-612x612.jpeg"

function About(){
  return (
  <main>
    <h1>About The Chef</h1>
    <p>I am okay at cooking</p>
    <img className="img-large" src={foodPic4} alt="chef" />
  </main>)
  }

export default About;
