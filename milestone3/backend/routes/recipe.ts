import express, { Request, Response, Router } from "express";
import Recipe from "../models/recipeSchema";

const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    const recipes = await Recipe.find({})
    res.send(recipes)
})

router.get("/:recipeName", async (req: Request, res: Response) => {
    const recipe = await Recipe.findOne({ name: req.params.recipeName })
    res.send(recipe);
})

router.post("/", async (req: Request, res: Response) => {
    const { name, description, image, ingredients, instructions } = req.body;
    let recipe = new Recipe({
        name,
        description,
        image,
        ingredients,
        instructions
    })

    try {
        recipe = await recipe.save();
        res.send("Recipe added to collection");
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

router.put("/:recipeName/ingredient", async (req: Request, res: Response) => {
    const recipeName = req.params.recipeName;
    const ingredient = req.body.newIngredient;

    const recipe = await Recipe.findOne({ name: recipeName });
    if (recipe) {
        recipe.ingredients = [...recipe.ingredients, ingredient];
        await recipe.save();
        res.send("Added ingredient");
    } else {
        res.send("Failed to add ingredient");
    }
})

router.put("/:recipeName/instruction", async (req: Request, res: Response) => {
    const recipeName = req.params.recipeName;
    const instruction = req.body.newInstruction;

    const recipe = await Recipe.findOne({ name: recipeName });
    if (recipe) {
        recipe.instructions = [...recipe.instructions, instruction];
        await recipe.save();
        res.send("Added instruction");
    } else {
        res.send("Failed to add instruction");
    }
})


export default router;