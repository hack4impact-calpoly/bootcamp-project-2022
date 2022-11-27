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

interface RecipePreviewProps extends Recipe {
    external: boolean;
}

function RecipePreview(props: RecipePreviewProps) {
    return (
        <div className="flex-container-recipes">
            <img src={props.image} alt={props.alt}/>
            <div className="text">
                <h3><Link to = {`${props.external ? "/externalRecipe" : "/recipe"}/${props.url}`}><u>{props.name}</u></Link></h3>
                {/* `recipe/${props.url}` will link to the correct recipe page */}
                {/* /externalRecipe is for external recipes, /recipe for internal */}
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default RecipePreview;
