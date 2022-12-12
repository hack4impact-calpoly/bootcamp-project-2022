const Recipe = require("../models/recipeSchema");
import express, { Request, Response, Router } from "express";

const router: Router = express.Router() 
router.use(express.json());

//get all Recipes
router.get("/", async (req: Request, res: Response) => {
    const recipes = await Recipe.find({})
    res.send(recipes)
  })

//get specific Recipe
router.get("/:recipeName", async (req: Request, res: Response) => {
    const {Recipename} = req.params;
    const recipeName = await Recipe.findOne({
        'name': Recipename
    })
    res.send(recipeName)
})

//create new recipe
router.post("/", async (req: Request, res: Response) => {
    const { name, image, description, ingredients, instructions } = req.body
    let recipe = new Recipe({
        name, 
        image,
        description,
        ingredients,
        instructions
    })
    try {
        recipe = await recipe.save()
        res.send(`Recipe called ${name} added to database`)
    } catch(error) {
        if (error instanceof Error) {
            res.status(500).send(error.message)
            console.log(`error is ${error.message}`)
        }
        else {
            console.log("Error is unkown")
        }
    }
});

export default router
