import Navbar from "./Navbar";
import { Recipe } from './RecipePreview';

function RecipePage(props: Recipe) {
    <body>
    <Navbar/>
    <header>
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
    </header>
    <main>
        <div className="flex-container-recipes">
            <img src={props.image} alt={props.alt}/>
            <div className="text">
                <p><i><b>Ingredients:</b></i></p>
                {props.ingredients}
            </div>
        </div>
        <div className="flex-container-recipes">
            <div className="text steps">
                <p><i><b>Steps:</b></i></p>
                {props.steps}
                <a href={props.source} target="_blank"><u>Recipe Source</u></a>
            </div>
        </div>
    </main>
    </body>
}

export default RecipePage;