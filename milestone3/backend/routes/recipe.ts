import express, { Request, Response, Router } from "express";
import Recipe from "../models/recipeSchema";

const router: Router = express.Router();

//gets all recipes
router.get("/", async (req: Request, res: Response) => {
  const recipes = await Recipe.find({});
  res.send(recipes);
});

//gets one recipe
router.get("/:name", async (req: Request, res: Response) => {
  const recipes = await Recipe.findOne({ name: req.params.name });
  res.send(recipes);
});

//adds one recipe to collection
router.post("/", async (req: Request, res: Response) => {
  const { name, description, image, ingredients, instructions } = req.body;
  let newRecipe = new Recipe({
    name,
    description,
    image,
    ingredients,
    instructions,
  });
  try {
    newRecipe = await newRecipe.save();
    res.send(`Recipe ${name} added to collection`);
  } catch (error) {
    res.status(500).send(error);
    console.log(`error is ${error}`);
  }
});

//adds ingredient to ingredient list
router.put("/:name/ingredient", async (req: Request, res: Response) => {
  const recipeName = req.params.name;
  const ingredient = req.body.newIngredient;

  try {
    const recipe = await Recipe.findOne({ recipeName });
    if (recipe) {
      recipe.ingredients = [...recipe.ingredients, ingredient];
      await recipe.save();
      res.send("added ingredient to recipe");
    }
  } catch (error) {
    res.status(500).send(error);
    console.log(`error is ${error}`);
  }
});

//adds instruction to instruction list
router.put("/:name/instruction", async (req: Request, res: Response) => {
  const recipeName = req.params.name;
  const instruction = req.body.newInstruction;

  try {
    //first find the recipe
    const recipe = await Recipe.findOne({ recipeName });
    if (recipe) {
      //if found, add instruction
      recipe.instructions = [...recipe.instructions, instruction];
      await recipe.save();
      res.send("added instruction to recipe");
    }
  } catch (error) {
    res.status(500).send(error);
    console.log(`error is ${error}`);
  }
});

export default router;
