import Recipe from "../models/recipeSchema";
import express, { Request, Response, Router } from "express";

const router: Router = express.Router()

//get all the recipes 
router.get("/recipe", async (req: Request, res: Response) => {
    const recipes = await Recipe.find({});
    res.send(recipes);
});

//get a single recipe   
router.get("/recipe/:name", async (req: Request, res: Response) => {
    const { name } = req.params;
    const recipes = await Recipe.find({ name: name });
    res.send(recipes);
});

//add a whole new recipe 
router.post("/recipe/add", async (req: Request, res: Response) => {
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
        res.send(`${addedRecipe.name} added to DB`)
    }
    catch (error: any) {
        res.status(500).send(error.message)
        console.log(`Error in adding recipe: ${error.message}`)
    }
});

//add an ingredient
router.put("/recipe/:recipeName/ingredient", async (req: Request, res: Response) => {
    const recipeName = req.params.recipeName;
    const newIngredient = req.body.newIngredient;
    const recipe = await Recipe.findOne({ name: recipeName });

    if (recipe) {
        recipe.ingredients = [...recipe.ingredients, newIngredient];
        await recipe.save();
        res.send(`${newIngredient} added to ${recipeName}`);
    } else {
        res.send(`Error in adding ${newIngredient} to ${recipeName}`);
    }
});

//add an instruction
router.put("/recipe/:recipeName/instruction", async (req: Request, res: Response) => {
    const recipeName = req.params.recipeName;
    const newInstruction = req.body.newInstruction;
    const recipe = await Recipe.findOne({ name: recipeName });

    if (recipe) {
        recipe.instructions = [...recipe.instructions, newInstruction];
        await recipe.save();
        res.send(`${newInstruction} added to ${recipeName}`);
    } else {
        res.send(`Error in adding ${newInstruction} to ${recipeName}`);
    }
});


export default router;