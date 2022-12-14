import { Recipe } from "../models/recipeSchema";
import express, { Request, Response, Router } from "express";

const router: Router = express.Router()

router.get("/", async (req: Request, res: Response) => {
    // get all recipes 
    const recipes = await Recipe.find({});
    res.send(recipes);
});

// get recipe
router.get("/:name", async (req: Request, res: Response) => {   
    const {name} = req.params;
    const recipes = await Recipe.find({name: name});
    res.send(recipes);
});

// add new
router.post("/person", async (req: Request, res: Response) => {
    const { 
        name,
        image, 
        description,  
        ingredients, 
        instructions 
    } = req.body

    let addedRecipe = new Recipe({
        name, 
        image,
        description,  
        ingredients, 
        instructions
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

// add ingredient
router.put("/:recipeName/ingredient", async (req: Request, res: Response) => {
    const recipeName = req.params.recipeName;
    const newIngredient = req.body.newIngredient;
    const recipe = await Recipe.findOne({name: recipeName});

    if (recipe){
        recipe.ingredients = [...recipe.ingredients, newIngredient];
        await recipe.save();
        res.send(`Ingredient added`);
    }else {
        res.send(`Failed to add ingredient`);
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
        res.send(`Instruction added`);
    }else {
        res.send(`Failed to add instruction`);
    }
});


export default router;