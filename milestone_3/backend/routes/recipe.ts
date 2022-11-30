import Recipe from "../models/recipeSchema";
import express, { Request, Response, Router } from "express";

const router: Router = express.Router()

// get all recipes
router.get("/recipe", async (req: Request, res: Response) => {
  const recipes = await Recipe.find({});
  res.send(recipes);
});

// get recipe by name
router.get("/recipe/:name", async (req: Request, res: Response) => {
    const recipes = await Recipe.find({ name: req.params.name });
    res.send(recipes);
});

// create a new recipe given a body
router.post("/recipe", async (req: Request, res: Response) => {
  try {
    const recipe = new Recipe({
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
    });
    await recipe.save();
    res.send("Added Recipe");
  } catch (e) {
    res.send("Failed to add recipe");
  }
});

router.put("/recipe/:name/ingredient", async (req: Request, res: Response) => {
  const recipe = await Recipe.findOne({ name: req.params.name });
  if (recipe) {
    recipe.ingredients = [...recipe.ingredients, req.body.ingredient];
    await recipe.save();
    res.send("Added ingredient")
  }
  res.send("Failed to add ingredient")
})

router.put("/recipe/:name/instruction", async (req: Request, res: Response) => {
  const recipe = await Recipe.findOne({ name: req.params.name });
  if (recipe) {
    recipe.instructions = [...recipe.instructions, req.body.instruction];
    await recipe.save();
    res.send("Added instruction");
  }
  res.send("Failed to add instruction");
});



export default router;