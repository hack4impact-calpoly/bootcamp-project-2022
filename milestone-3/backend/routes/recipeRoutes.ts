import express, { Request, Response, Router } from "express";
import Recipe from "../models/recipeSchema";

const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    const recipes = await Recipe.find({})
    res.send(recipes)
});

router.get("/:name", async (req: Request, res: Response) => {
    const recipes = await Recipe.find({ name: req.params.name})
    res.send(recipes)
});

router.post("/", async (req: Request, res: Response) => {
    const { name, description, image, ingredients, instructions } = req.body
    let recipe = new Recipe({
        name,
        description,
        image,
        ingredients,
        instructions
    })
    try {
        recipe = await recipe.save()
        res.send(`Recipe named ${name} added to collection`)
    }
    catch(error : any) {
        res.status(500).send(error.message)
        console.log(`error is ${error.message}`)
    }
});

router.put("/:recipeName/ingredient", async (req: Request, res: Response) => {
    const recipeName = req.params.recipeName;
    const ingredient = req.body.newIngredient;

    const recipe = await Recipe.findOne({ name: recipeName });
    if (recipe) {
        recipe.ingredients = [...recipe.ingredients, ingredient];
        await recipe.save();
        res.send("Successfully added ingredient");
    } else {
        res.send("Failed to add new ingredient");
    }
})

router.put("/:recipeName/instruction", async (req: Request, res: Response) => {
    const recipeName = req.params.recipeName;
    const instruction = req.body.newInstruction;

    const recipe = await Recipe.findOne({ name: recipeName });
    if (recipe) {
        recipe.instructions = [...recipe.instructions, instruction];
        await recipe.save();
        res.send("Successfully added instruction");
    } else {
        res.send("Failed to add new instruction");
    }
})

export default router;