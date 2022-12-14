import express, {Request, Response, Router}  from "express";
import Recipe from "../models/recipeSchema"


const router: Router = express.Router();

//get all recipe

router.get("/recipe", async(req: Request, res, Response) =>{
    const recipes = await Recipe.find({});
    console.log(recipes);
    res.send(recipes);
})


// get recipe by name

router.get("/recipe/:name", async(req: Request, res, Response)=>{
    const recipes = await Recipe.find({name: req.params.name})
    console.log(recipes);
    res.send(recipes);
})
//post recipe
router.post("/recipe", async(req: Request, res, Response)=>{
    const{name, image, description, ingredients, instructions} = req.body
    let recipe = new Recipe({
        name,
        image,
        description,
        ingredients,
        instructions
    })
    try {
        recipe = await recipe.save()
        res.send(`Recipe called ${name} added to database`)
    } catch(error) {
        if (error instanceof Error) {
            res.status(500).send(error.message)
            console.log(`error is ${error.message}`)
        }
        else {
            console.log("Error is unkown")
        }
    }
})
//update recipe by ingredient
router.put("/recipe/:name/ingredient", async(req: Request, res, Response)=>{
    const recipe = await Recipe.findOne({name: req.params.name})
    if(recipe)
    {
        recipe.ingredients = [...recipe.ingredients, req.body.ingredient];
        await recipe.save()
        res.send("Added ingredient");
    }
    res.send("Failed to add ingredient")
    
})

//update recipe by instruction
router.put("/recipe/:name/instruction", async(req: Request, res, Response)=>{
    const recipe = await Recipe.findOne({name: req.params.name})
    if(recipe)
    {
        recipe.instructions = [...recipe.instructions, req.body.instructions];
        await recipe.save()
        res.send("Added instruction");
    }
    res.send("Failed to add instruction")
    
})


export default router