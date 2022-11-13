import { Link } from 'react-router-dom';


export interface Recipe {
    name: string;
    image: string;
    desc: string;
    alt: string;
    url: string;
    ingredients: string[];
    steps: string[];
    source: string;
};

function RecipePreview(props: Recipe) {
    return (
        <div className="flex-container-recipes">
            <img src={props.image} alt={props.alt}/>
            <div className="text">
                <h3><Link to = {`recipe/${props.url}`}><u>{props.name}</u></Link></h3>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default RecipePreview;
