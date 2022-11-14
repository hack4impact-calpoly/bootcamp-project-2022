import RecipePrevew from './recipePreview';
import { Recipe } from '../recipeData';




export default function Home(props: {recipes: Recipe[]}){


    return (
    <>
        <h1 className="flex-container center">Jesus' Grill</h1>
        <hr/>
        <RecipePrevew recipes={props.recipes}/>
    </>
    )

    
}