import "./RecipePreview.css";
import { Link } from "react-router-dom";

interface Recipe {
    name: string;
    image: string;
    desc: string;
}
export default function RecipePreview(props: Recipe) {
    return (
        <div className="card">
            <h2 className="card-title">{props.name}</h2>
            <div className="card-body">
                <img
                    className="card-img"
                    src={props.image}
                    width="250"
                    height="250"
                />
                <p className="card-disc">{props.desc}</p>
                <Link
                    className="card-btn"
                    to={`/recipes/${props.name
                        .toLowerCase()
                        .replace(/[^a-z0-9]/gi, "")}`}
                >
                    Go
                </Link>
            </div>
        </div>
    );
}
