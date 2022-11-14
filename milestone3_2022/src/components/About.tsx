import gif from "../images/cooking.gif"
import "../App.css"

export default function About() {
    return (
        <main>
            <h1>About Me</h1>
            <p>Real-life footage of me cooking:</p>
            <img className="gif" src={gif} alt="cooking fail"/>
        </main>
    )
}