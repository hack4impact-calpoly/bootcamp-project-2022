import {Recipe} from '../frontend/src/recipeData' 

interface RecipeExtend extends Recipe{
    _id: string;
}

const fetch_data = async() => {
    try{
        const data: RecipeExtend[] = await fetch('http://localhost:3010/recipes').then(res => res.json()).then((data) => (data))
        for (let recipe of data){
            for (let ingredient of recipe.ingredients){
                console.log(ingredient.ingredients)
            }
        }
    }
    catch(err:any){
        console.log(err)
    }
   
    
}

fetch_data()