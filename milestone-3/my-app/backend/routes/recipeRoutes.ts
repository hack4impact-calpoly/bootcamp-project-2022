import Recipe from "../models/recipeSchema";
import express, { Request, Response, Router } from "express";

const router: Router = express.Router()

router.get("/", async (req: Request, res: Response) => {
    // get all recipes 
    const recipes = await Recipe.find({});
    res.send(recipes);
});

router.get("/:name", async (req: Request, res: Response) => {  
    // get specific recipe   
    const {name} = req.params;
    const recipes = await Recipe.find({name: name});
    res.send(recipes);
});

router.post("/person", async (req: Request, res: Response) => {
    // add new recipe 
    const { 
        name,
        image, 
        description, 
        imageAltName, 
        ingredients, 
        instructions, 
        orig_link, 
        orig_link_name, 
        buttonHref 
    } = req.body

    let addedRecipe = new Recipe({
        name, 
        image,
        description, 
        imageAltName, 
        ingredients, 
        instructions, 
        orig_link, 
        orig_link_name, 
        buttonHref 
    })

    try {
      addedRecipe = await addedRecipe.save()
      res.send(`recipe for ${addedRecipe.name} added to collection`)
    } 
    catch(error: any) {
      res.status(500).send(error.message)
      console.log(`error is ${error.message}`)
    }
});

router.put("/:recipeName/ingredient", async (req: Request, res: Response) => {
    // add ingredient to a recipe
    const recipeName = req.params.recipeName;
    const newIngredient = req.body.newIngredient;
    const recipe = await Recipe.findOne({name: recipeName});
    
    if (recipe){
        recipe.ingredients = [...recipe.ingredients, newIngredient];
        await recipe.save();
        res.send(`${newIngredient} added to ${recipeName}`);
    }else {
        res.send(`Failed to add ${newIngredient} to ${recipeName}`);
    }
});

router.put("/:recipeName/instruction", async (req: Request, res: Response) => {
    // add step to a recipe
    const recipeName = req.params.recipeName;
    const newStep = req.body.newStep;
    const recipe = await Recipe.findOne({name: recipeName});
    
    if (recipe){
        recipe.instructions = [...recipe.instructions, newStep];
        await recipe.save();
        res.send(`${newStep} added to ${recipeName}`);
    }else {
        res.send(`Failed to add ${newStep} to ${recipeName}`);
    }
});


export default router;