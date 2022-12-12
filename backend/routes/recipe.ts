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
  const { name, description, image, ingredients, instructions } = req.body;
  let recipe = new Recipe({
    name,
    description,
    image,
    ingredients,
    instructions,
  });

  try {
    recipe = await recipe.save();
    res.send(`Recipe named ${name} added to collection`);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
      console.log(`error is ${error.message}`);
    } else {
      console.log("Unexpected error", error);
    }
  }
});

router.put("/:recipeName/ingredient", async (req: Request, res: Response) => {
  const recipeName = req.params.recipeName;
  const ingredient = req.body.newIngredient;
  // You now should have access to recipeName and ingredient assuming your
  // request URL and body are correct.
  const recipe = await Recipe.findOne({
    name: recipeName,
  });

  if (recipe) {
    try {
      recipe.ingredients = [...recipe.ingredients, ingredient];
      await recipe.save();
      res.send(`Ingredient: ${ingredient} added to recipe: ${recipeName}`);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
        console.log(`error is ${error.message}`);
      } else {
        console.log("Unexpected error", error);
      }
    }
  } else {
    res.send("Failed to find recipe");
  }
});

router.put("/:recipeName/instruction", async (req: Request, res: Response) => {
  const recipeName = req.params.recipeName;
  const instruction = req.body.newInstruction;
  // You now should have access to recipeName and instruction assuming your
  // request URL and body are correct.
  const recipe = await Recipe.findOne({
    name: recipeName,
  });

  if (recipe) {
    try {
      recipe.instructions = [...recipe.instructions, instruction];
      await recipe.save();
      res.send(`Instruction: ${instruction} added to recipe: ${recipeName}`);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
        console.log(`error is ${error.message}`);
      } else {
        console.log("Unexpected error", error);
      }
    }
  } else {
    res.send("Failed to find recipe");
  }
});

export default router;
