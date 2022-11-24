import { Link } from 'react-router-dom';
import { Recipe } from '../recipeData';
import './recipePreview.css'


export default function RecipePreview(props: Recipe) {
    return (
            // replace everything between the <div> & </div> tags
            // with your code from earlier milestones
        <div className='card'>
            <Link to={`recipe/${props.type}`}><h1> {props.name} </h1></Link>
            <div>
                <img src={`/cheerios/${props.image}`} alt="I suck at relative file pathing" className='card-image'/>
                <p>{props.description}</p>
            </div>
        </div>
    );
}
