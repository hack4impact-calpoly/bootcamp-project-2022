import express, { Request, Response, Router } from "express";
import Recipe from "../models/recipeSchema";

const router: Router = express.Router();


// get all recipes
router.get("/recipe", async (req: Request, res: Response) => {
    const recipes = await Recipe.find({});
    console.log(recipes);
    res.send(recipes);
})

// get recipe by name 
router.get("/recipe/:name", async (req: Request, res: Response) => {
    const recipes = await Recipe.find({name: req.params.name});
    console.log(recipes);
    res.send(recipes);
}) 

// post a recipe
router.post("/recipe", async  (req: Request, res: Response) => {
    const {name, description, image, ingredients, instructions} = req.body;
    let recipe = new Recipe({
        name,
        description,
        image,
        ingredients,
        instructions
    })

    try{
        recipe = await recipe.save();
        res.send(`Recipe called ${name} added to the collection`);
    } catch(error){
        if(error instanceof Error){
            res.status(500).send(error.message);
            console.log(`error is ${error.message}`);
        }
    }
})

// update an ingredient on a specific recipe 
router.put("/recipe/:name/ingredient", async (req: Request, res: Response) => {
    const recipe = await Recipe.findOne({name: req.params.name});
    if(recipe){
        recipe.ingredients = [...recipe.ingredients, req.body.ingredient];
        try{
            await recipe.save();
            res.send("Added ingredient");
        } catch(error){
            if(error instanceof Error){
                res.status(500).send(error.message);
                console.log(`error is ${error.message}`);
            }
        }
    }
    res.send("Failed to add ingredient");
})

// update an instruction on a specific recipe 
router.put("/recipe/:name/instruction", async (req: Request, res: Response) => {
    const recipe = await Recipe.findOne({name: req.params.name});
    if(recipe){
        recipe.instructions = [...recipe.instructions, req.body.instruction];
        try{
            await recipe.save();
            res.send("Added instruction");
        } catch(error){
            if(error instanceof Error){
                res.status(500).send(error.message);
                console.log(`error is ${error.message}`);
            }
        }
    }
    res.send("Failed to add instructions");
})

export default router;