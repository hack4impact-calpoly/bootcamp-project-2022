import Recipe from "../models/recipeSchema"
import express, { Request, Response, Router } from "express";

const router: Router = express.Router()

// get all recipes
router.get("/recipe", async (req: Request, res: Response) => {
  const recipes = await Recipe.find({});
  console.log(recipes);
  res.send(recipes);
})

// get each recipe
router.get('/recipe/:name', async (req: Request, res: Response) => {
  const recipes = await Recipe.find({name: req.params.name});
  console.log(recipes);
  res.send(recipes);
});

// create new recipe
router.post('/recipe', async (req: Request, res: Response) => {
    const { 
        name, 
        description,
        image, 
        ingredients, 
        instructions } 
    = req.body;
    let newRecipe = new Recipe({
        name, 
        description, 
        image, 
        ingredients, 
        instructions
    });
    try {
        await newRecipe.save(req.body); 
        res.send("Recipe created");
    } catch(error) {
        let message = "Failed to create recipe"; 
        res.status(500).send(message);
    }
  });

// add ingredients
router.put('/recipe/:name/ingredient', async (req: Request, res: Response) => {
    const recipe = await Recipe.findOne({name: req.params.name});
    if (recipe) {
        recipe.ingredients = [...recipe.ingredients, req.body.ingredient];
        await recipe.save();
        res.send("Ingredient added");
    } else {
        res.send("Failed to add ingredient");
    }});

// add instructions
router.put('/recipe/:name/instruction', async (req: Request, res: Response) => {
    const recipe = await Recipe.findOne({name: req.params.name});
    if (recipe) {
        recipe.instructions = [...recipe.instructions, req.body.instruction];
        await recipe.save();
        res.send("Instruction added");
    } else {
        res.send("Failed to add instruction");
    }});

export default router;