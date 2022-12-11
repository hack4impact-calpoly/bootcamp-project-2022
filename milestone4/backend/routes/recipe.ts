import express, { Request, Response, Router } from "express";
import Recipe from "../models/recipeSchema";

const router: Router = express.Router() // creates router

//define router methods
router.get("/", async (req: Request, res: Response) => {
    const recipes = await Recipe.find({})
    res.send(recipes)
});

router.get("/:name", async (req: Request, res: Response) => {
    const { name } = req.params; // destructure params of req to grab name of recipe
    const recipe = await Recipe.findOne({name: name}); // uses mongoose findOne function to find matching recipe
    if (recipe) {
        res.send(recipe);
    } else {
        res.send(`${name} not found in recipes`);
    }
});

router.post("/", async (req: Request, res: Response) => {
    const { name, description, image, ingredients, instructions } = req.body;
    let newRecipe = new Recipe({name, description, image, ingredients, instructions}); // new recipe with info from req
    try {
        newRecipe = await newRecipe.save();
        res.send("Success: recipe added");
    } catch (err) {
        res.status(500).send('POST request failed'); //from expressjs.com errorhandling page
    }
});

router.put("/:name/ingredient", async (req: Request, res: Response) => {
    const name = req.params.name;
    const ingredient = req.body.newIngredient;
    const recipe = await Recipe.findOne({name: name}); //grab recipe we want to change
    if (recipe) {
        try {
            recipe.ingredients = [...recipe.ingredients, ingredient]; // change recipe
            await recipe.save();
            res.send("Success: ingredient added");
        } catch (err) {
            res.status(500).send('PUT request failed');
        }
    } else {
        res.send('desired recipe does not exist');
    }
});

router.put("/:name/instruction", async (req: Request, res: Response) => {
    const name = req.params.name;
    const instruction = req.body.newInstruction;
    const recipe = await Recipe.findOne({name: name}); //grab recipe we want to change
    if (recipe) {
        try {
            recipe.instructions = [...recipe.instructions, instruction]; // change recipe
            await recipe.save();
            res.send("Success: instruction added");
        } catch (err) {
            res.status(500).send('PUT request failed');
        }
    } else {
        res.send('desired recipe does not exist');
    }
});

export default router;