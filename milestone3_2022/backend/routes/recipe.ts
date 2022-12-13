import express, { Request, Response, Router } from "express";
import Recipe from "../models/recipeSchema";

const router: Router = express.Router();

// get all recipes
router.get("/recipe", async (req: Request, res: Response) => {
    const recipes = await Recipe.find({});
    res.send(recipes);
});

// get recipe by name
router.get("/recipe/:name", async (req: Request, res: Response) => {
    const { name } = req.params;
    const recipe = await Recipe.findOne({
      name: name,
    });
    res.send(recipe);
});

// create a new recipe
router.post("/recipe", async (req: Request, res: Response) => {
  try {
    await Recipe.create(req.body);
    res.send(`Recipe ${Recipe.name} added to collection`)
  } catch (error: any) {
    res.status(500).send(error.message)
    console.log(`error is ${error.message}`)
  }
  
});

// add an ingredient
router.put("/recipe/:name/ingredient", async (req: Request, res: Response) => {
  const recipe = await Recipe.findOne({ name: req.params.name });
  if (recipe) {
    recipe.ingredients = [...recipe.ingredients, req.body.ingredient];
    await recipe.save();
    res.send("Ingredient added");
  } else {
    res.send("Failed to add ingredient");
  }
});

// add an instruction
router.put("/recipe/:name/instruction", async (req: Request, res: Response) => {
  const recipe = await Recipe.findOne({ name: req.params.name });
  if (recipe) {
    recipe.instructions = [...recipe.instructions, req.body.instruction];
    await recipe.save();
    res.send("Instruction added");
  } else {
    res.send("Failed to add instruction");
  }
});

export default router;