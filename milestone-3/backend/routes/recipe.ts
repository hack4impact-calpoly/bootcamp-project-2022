import express, {Request, Response, Router} from 'express';
import Recipe from "../models/recipeSchema"

const router: Router = express.Router()

// get all recipe 
router.get("/recipe", async(req: Request, res: Response)=>{
    const recipes=await Recipe.find({});
    // console.log(recipes);
    res.send(recipes);
})

// get recipe by name
router.get("/recipe/:name", async(req: Request, res: Response)=>{
    const recipes=await Recipe.find({name: req.params.name});
    // console.log(recipes);
    res.send(recipes);
})


// add an ingredient
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

// add an instruction 
router.put("/recipe/:name/instruction", async(req:Request, res: Response)=>{
    const recipe = await Recipe.findOne({name:req.params.name})

    if(recipe){
        recipe.instructions=[...recipe.instructions, req.body.instruction]
        await recipe.save()
        res.send("Added instruction")
        return // aovid : Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    }
    res.send("Failed to add instruction")
    return  
})

// delete an ingredient from recipe
router.put("/recipe/:name/ingredient/delete", async(req:Request, res: Response)=>{
    const recipe = await Recipe.findOne({name:req.params.name})

    if(recipe){
        recipe.ingredients = recipe.ingredients.filter(function(ele) {
        return ele !== req.body.ingredient;
      });
        await recipe.save()
        res.send("Removed ingredient")
        return // aovid : Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    }
    res.send("Failed to remove ingredient")
    return  
})

// delete an instruction from recipe
router.put("/recipe/:name/instruction/delete", async(req:Request, res: Response)=>{
    const recipe = await Recipe.findOne({name:req.params.name})

    if(recipe){
        recipe.instructions = recipe.instructions.filter(function(ele) {
        return ele !== req.body.instruction;
      });
        await recipe.save()
        res.send("Removed instruction")
        return // aovid : Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    }
    res.send("Failed to remove instruction")
    return  
})
 


export default router;