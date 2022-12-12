import { Link } from "react-router-dom";

interface Recipe {
    name: string;
    desc: string;
    image: string;
    ingredients: string[];
    steps: string[];
    path: string,
    id: string
}

function RecipePreview(props: Recipe) {
    return (
        <div className="gridBox">
            <h2>
                <Link to={props.path} className="gridTitle">{props.name}</Link>
            </h2>
            <div className="gridContent">
                <img src={props.image} alt="food" className="gridImg" />
                <p className="gridText">{props.desc}</p>
            </div>
        </div>
    );
}

export default RecipePreview