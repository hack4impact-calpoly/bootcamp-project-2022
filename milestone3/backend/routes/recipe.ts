import Recipe from "../models/recipeSchema";
import express, {Request, Response, Router} from "express";

const router: Router = express.Router();

//get all recipes
router.get("/recipe", async (req: Request, res: Response) => {
    try {
        const recipes = await Recipe.find({});
        res.status(200).send(recipes);
    } catch (error) {
        console.log(error);
        res.status(500).send("An error ocurred in the server");
    }
});

//get recipe by name
router.get("/recipe/:name", async (req: Request, res: Response) => {
    const {name} = req.params;
    try {
        const recipe = await Recipe.findOne({
            "name": name
        });
        res.status(200).send(recipe);
    } catch (error) {
        console.log(error);
        res.status(500).send("An error ocurred in the server");
    }
});

//adds new recipe
router.post("/recipe", async (req: Request, res: Response) => {
    const recipeToAdd = new Recipe(req.body);
    const savedRecipe = await recipeToAdd.save();
    if (savedRecipe) {
        res.status(201).send(savedRecipe);
    } else {
        res.status(500).end();
    }
});

//updates ingredient list
router.put("/recipe/:name/ingredient", async (req: Request, res: Response) => {
    const {name} = req.params;
    const recipe = await Recipe.findOne({
        "name": name
    });
    if (recipe) {
        recipe.ingredients = [...recipe.ingredients, req.body.newIngredient];
        const savedRecipe = await recipe.save();
        if (savedRecipe) {
            res.status(200).send("Added ingredient");
        } else {
            res.status(500).send("Failed to add ingredient");
        }
    } else {
        res.status(500).send("Not a recipe");
    }
});

//updates instruction list
router.put("/recipe/:name/instruction", async (req: Request, res: Response) => {
    const {name} = req.params;
    const recipe = await Recipe.findOne({
        "name": name
    });
    if (recipe) {
        recipe.instructions = [...recipe.instructions, req.body.newInstruction];
        const savedRecipe = await recipe.save();
        if (savedRecipe) {
            res.status(200).send("Added instruction");
        }
        else {
            res.status(500).send("Failed to add instruction");
        }
    } else {
        res.status(500).send("Not a recipe");
    }
});

export default router;

