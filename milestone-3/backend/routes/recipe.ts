import express, {Request, Response, Router} from 'express';
import Recipe from "../models/recipeSchema"

const router: Router = express.Router()

// get all recipe 
router.get("/recipe", async(req: Request, res: Response)=>{
    const recipes=await Recipe.find({});
    console.log(recipes);
    res.send(recipes);
})

// get recipe by name
router.get("/recipe/:name", async(req: Request, res: Response)=>{
    const recipes=await Recipe.find({name: req.params.name});
    console.log(recipes);
    res.send(recipes);
})


// update ingredient in recipe
router.put("/recipe/:name/ingredient", async(req:Request, res: Response)=>{
    const recipe = await Recipe.findOne({name:req.params.name})
    
    if(recipe){
        recipe.ingredients=[...recipe.ingredients, req.body.ingredient]
        await recipe.save()
        res.send("Added ingredient")
        return // aovid : Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    }
    res.send("Failed to add ingredient")
    return  
})

export default router;