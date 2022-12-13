const Recipe = require("../models/recipeSchema");
import express, { Request, Response, Router } from "express";

const router: Router = express.Router() 

//get all recipes
router.get('/recipe', async (req: Request, res: Response) => {
    const recipes = await Recipe.find({})
    res.send(recipes)
})

// get specific recipe
router.get('/recipe/:recipeName', async (req: Request, res: Response) => {
    const { recipeName } = req.params;
    const recipe = await Recipe.findOne({
    'name': recipeName
    });
    res.send(recipe);
});

export default router;