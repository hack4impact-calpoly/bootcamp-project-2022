// recipe routes
import Recipe from "../models/recipeSchema";
import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

// get all recipes
router.get("/", async (req: Request, res: Response) => {
  const recipes = await Recipe.find({});
  res.send(recipes);
});

// get specific recipe
router.get("/:name", async (req: Request, res: Response) => {
  const { name } = req.params;
  const recipe = await Recipe.findOne({
    name: name,
  });
  res.send(recipe);
});

// create new recipe
router.post("/", async (req: Request, res: Response) => {
  await Recipe.create(req.body);
  res.send("Recipe created");
});

// update recipe
router.put("/:name", async (req: Request, res: Response) => {
  await Recipe.findOneAndUpdate({ name: req.params.name }, req.body);
  res.send("Recipe updated");
});

// delete recipe
router.delete("/:name", async (req: Request, res: Response) => {
  await Recipe.findOneAndDelete({ name: req.params.name });
  res.send("Recipe deleted");
});

// add ingredient to recipe
router.put("/:recipeName/ingredient", async (req: Request, res: Response) => {
  const { recipeName } = req.params;
  const { newIngredient } = req.body;
  const recipe = await Recipe.findOne({ name: recipeName });
  if (recipe) {
    recipe.ingredients = [...recipe.ingredients, newIngredient];
    await recipe.save();
    res.send("Ingredient added");
  } else {
    res.send("Failed to add ingredient");
  }
});

// add instruction to recipe
router.put("/:recipeName/instruction", async (req: Request, res: Response) => {
  const { recipeName } = req.params;
  const { newInstruction } = req.body;
  const recipe = await Recipe.findOne({ name: recipeName });
  if (recipe) {
    recipe.instructions = [...recipe.instructions, newInstruction];
    await recipe.save();
    res.send("Instruction added");
  } else {
    res.send("Failed to add instruction");
  }
});

export default router;
