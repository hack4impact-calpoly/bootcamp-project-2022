// backend/routes/recipe.ts
import express, { Request, Response, Router } from "express";
import Recipe from "../models/recipeSchema";

const router: Router = express.Router() 

// get all recipes
router.get("/", async (req: Request, res: Response) => {
  const recipes = await Recipe.find({});
  res.send(recipes);
})

// get specific recipe names
router.get("/:name", async (req: Request, res: Response) => {     
  const {name} = req.params;
  const recipes = await Recipe.findOne({
    name: name,
    });
  res.send(recipes);
});

// creates new recipe (underneath the original recipes) 
// (from notion page)
router.post("/", async (req: Request, res: Response) => {
    const { name, description, image, ingredients, instructions } = req.body
    let newRecipe = new Recipe({
        name,
        description,
        image,
        ingredients,
        instructions
    })

    try {
      newRecipe = await newRecipe.save()
      res.send(`Recipe ${name} added to collection`)
    } 
    catch(error: any) {
      res.status(500).send(error.message)
      console.log(`error is ${error.message}`)
    }
});

// adds recipe ingredients
router.put("/:name/ingredient", async (req: Request, res: Response) => {
    const name = req.params.name;
    const ingredient = req.body.newIngredient;
    const recipes = await Recipe.findOne({name: name});
    if (recipes)
    {
        recipes.ingredients = [...recipes.ingredients, ingredient];
        await recipes.save();
        res.send("Ingredient added");
    }

    else {
        res.send("Failed to add new ingredient");
    }

});

// adds recipe instructions
router.put("/:name/instruction", async (req: Request, res: Response) => {
    const name = req.params.name;
    const instruction = req.body.newInstruction;
    const recipes = await Recipe.findOne({name: name});
    if (recipes)
    {
        recipes.instructions = [...recipes.instructions, instruction];
        await recipes.save();
        res.send("Instruction added");
    }

    else 
    {
        res.send("Failed to add new instruction");
    }
});

export default router;