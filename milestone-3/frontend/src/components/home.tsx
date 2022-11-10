import { recipeObj } from '../recipeData';
import RecipePrevew from './recipePreview';







export default function Home(){
    return (
    <>
        <h1 className="flex-container center">Jesus' Grill</h1>
        <hr/>
        <RecipePrevew recipes={recipeObj}/>
    </>
    )

    
}