import './RecipePreview.css';
import { Link } from "react-router-dom";

export default interface Preview {
    name: string; 
    image: string;
    description: string;
}

export default function Preview(props: Preview) {
    return (
        <div className="three-cards">
            <div className="cards">
                <img className="card-img" src={props.image} />
                <div className="card-body">
                    <Link to="" className="button">{props.name}</Link>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}