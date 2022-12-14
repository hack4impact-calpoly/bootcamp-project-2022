import Express, { Request, Response, Router } from "express";
import Recipe from "../models/recipeSchema";

const router: Router= Express.Router();

router.get("/recipe", async (req: Request, res: Response)=>{

  const recipes= await Recipe.find({})
  res.send(recipes)
})

router.get("/recipe/:recipeName", async (req: Request, res: Response) =>
{
  const {recipeName}=req.params;
  const recipes= await Recipe.findOne({"name": recipeName})
  res.send(recipes)
})

router.post("/recipe", async (req: Request, res: Response) => {
  const recipe = await Recipe.create(req.body)
  res.send("Recipe has been created")
})

router.put("/recipe/:recipeName/ingredient", async (req: Request, res: Response) => {
  const recipeName = req.params.recipeName;
  const ingredient = req.body.newIngredient;
  const recipe = await Recipe.findOne({ 'name': recipeName })

  if (recipe) {
      recipe.ingredients = [...recipe.ingredients, ingredient];
      await recipe.save();
      res.send("Ingredients added")
  }
  else {
      res.send("Ingredients couldn't be added")
  }
})

router.put("/recipe/:recipeName/instruction", async (req: Request, res: Response) => {
  const recipeName = req.params.recipeName;
  const instruction = req.body.newInstruction;
  const recipe = await Recipe.findOne({ 'name': recipeName })

  if (recipe) {
      recipe.instructions = [...recipe.instructions, instruction];
      await recipe.save();
      res.send("Instruction added")
  }
  else {
      res.send("Instruction couldn't be added");
  }
})
