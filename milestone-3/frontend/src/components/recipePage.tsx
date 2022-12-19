import { Link } from "react-router-dom";

interface Recipe {
    name: string;
    image: string;
    desc: string;
    ingredients: string [];
    instructions: string [];
}

function RecipePage(props: Recipe) {
    return (
    <div className="sub-section">
    <h2>
        <Link to={`/recipes/${props.name}`} className="text">{props.name}</Link>
    </h2>
    <div className="sub-section-content">
        <img className="recipe-images-home" src={props.image} alt="picture of banana bread" width="200" height="200"/>
        <p className="text">
            {props.desc}
        </p>
    </div>
    <div className="sub-section-content">
        <p className="text">
            {props.ingredients}
        </p>
    </div>
    <div className="sub-section-content">
        <p className="text">
            {props.instructions}
        </p>
    </div>
</div>);
}

export default RecipePage;