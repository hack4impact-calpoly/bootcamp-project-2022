import '../App.css';
import { Link } from 'react-router-dom';


interface RecipePreview {
    name: string,
    description: string,
    image: string,
    color: string;
    external?: boolean;
}


export default function RecipePreview(props: RecipePreview) {

    if(props.external){
        return (
            <Link to={props.external ? "externalRecipe/" + props.name : "recipe/" + props.name}>
    
                <div className="dish_card" style={{ backgroundColor: props.color, width: '506.8px' }}>
                    <img className = "externalImage" src={props.image} alt={props.name} />
                    <div>
                        <h1>{props.name}</h1>
                        <p> {props.description}</p>
                    </div>
                </div>
    
            </Link>
        ) 
    }else{
        return (
            <Link to={props.external ? "externalRecipe/" + props.name : "recipe/" + props.name}>
    
                <div className="dish_card" style={{ backgroundColor: props.color, width: '506.8px' }}>
                    <img src={props.image} alt={props.name} />
                    <div>
                        <h1>{props.name}</h1>
                        <p> {props.description}</p>
                    </div>
                </div>
    
            </Link>
        )
    }

    
}

