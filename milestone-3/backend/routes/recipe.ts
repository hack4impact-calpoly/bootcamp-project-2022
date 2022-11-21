import Recipe from "../models/recipeSchema";
import express, { Request, Response, Router } from "express";
import { request } from "http";

const router: Router = express.Router()

router.get("/", async (req: Request, res: Response) => {
    const recipes = await Recipe.find({})
    res.send(recipes)
})

router.get("/:recipeName", async (req: Request, res: Response) => {
    const { name } = req.params;
    const recipe = await Recipe.findOne({
        'name': name
    });
    res.send(recipe);
})

router.post("/", async (req: Request, res: Response) => {
    try {
        const {name, description, ingredients, instructions } = req.body;
        const recipe = new Recipe({name, description, ingredients, instructions});
        await recipe.save();
        res.status(200).json(recipe);
    } catch (err) {
        console.error(err);
    }
})

export default router;