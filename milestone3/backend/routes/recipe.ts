import express, { Request, Response, Router } from "express";
import Recipe from "../models/recipeSchema";
// const Recipe = require("../models/recipeSchema");

const router: Router = express.Router();

// get all recipes
router.get("/", async (req: Request, res: Response) => {
  const recipes = await Recipe.find({});
  res.send(recipes);
});

// get specific recipe
router.get("/:name", async (req: Request, res: Response) => {
  const { name } = req.params;
  const recipes = await Recipe.findOne({
    name: name,
  });
  res.send(recipes);
});

// add new recipe
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
    res.send(`Recipe named ${name} added to the collection`);
  } catch (error) {
    res.status(500).send(error);
    console.log(`Error adding: ${error}`);
  }
});

// add an ingredient
router.put("/:name/ingredient", async (req: Request, res: Response) => {
  const recipeName = req.params.name;
  const ingredient = req.body.ingredient;
  const recipe = await Recipe.findOne({ name: recipeName });

  if (recipe) {
    try {
      recipe.ingredients = [...recipe.ingredients, ingredient];
      await recipe.save();
      res.send("Ingredient added");
    } catch (error) {
      res.status(400).send(error);
      console.log(`Error adding: ${error}`);
    }
  }
});

// add an instruction
router.put("/:name/instruction", async (req: Request, res: Response) => {
    const recipeName = req.params.name;
    const instruction = req.body.instruction;
    const recipe = await Recipe.findOne({ name: recipeName });
    if (recipe) {
      try {
        recipe.instructions = [...recipe.instructions, instruction];
        await recipe.save();
        res.send("Instruction added");
      } catch (error) {
        res.status(400).send(error);
        console.log(`Error adding: ${error}`);
      }
    } else {
      res.status(404).send("Recipe not found");
      console.log("Recipe not found");
    }
});

export default router;
