import Recipe from "../models/recipeSchema";
import express, { Request, Response, Router } from "express";

const router: Router = express.Router()

router.get("/", async (req: Request, res: Response) => {
    const recipes = await Recipe.find({})
    res.send(recipes)
})

export default router;