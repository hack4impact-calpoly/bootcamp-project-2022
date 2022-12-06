import express, { Request, Response, Router } from "express";
import Recipe from "../models/recipeSchemas";

const router: Router = express.Router();


router.get("/recipe", async (req: Request, res: Response) => {
    const recipes = await Recipe.find({});
    res.send(recipes);
});


router.get("/recipe/:name", async (req: Request, res: Response) => {
    const { name } = req.params;
    const recipe = await Recipe.findOne({
      name: name,
    });
    res.send(recipe);
});


router.post("/recipe", async (req: Request, res: Response) => {
  await Recipe.create(req.body);
  res.send("created recipe from request");
});

router.put("/recipe/:name/instruction", async (req: Request, res: Response) => {
    const recipe = await Recipe.findOne({ name: req.params.name });
    if (recipe) {
      recipe.instructions = [...recipe.instructions, req.body.instruction];
      await recipe.save();
      res.send("added instruction from request");
    } else {
      res.send("could not add instruction");
    }
  });

router.put("/recipe/:name/ingredient", async (req: Request, res: Response) => {
  const recipe = await Recipe.findOne({ name: req.params.name });
  if (recipe) {
    recipe.ingredients = [...recipe.ingredients, req.body.ingredient];
    await recipe.save();
    res.send("added ingredient");
  } else {
    res.send("could not add ingredient");
  }
});




export default router;