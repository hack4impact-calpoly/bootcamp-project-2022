import express, {Request, Response, Router} from "express";
import Recipe from "../models/RecipeSchema";

const router: Router = express.Router();

router.get("/recipe", async (req: Request, res: Response) => {
    const recipes = await Recipe.find({});
    console.log(recipes);
    res.send(recipes);
  })

router.get("/recipe/:name", async (req: Request, res: Response) => {
    const recipes = await Recipe.find({name: req.params.name});
    console.log(recipes);
    res.send(recipes);
})

router.put("/recipe/:name/ingredient", async (req: Request, res: Response) => {
    const recipe = await Recipe.findOne({name: req.params.name});
    if (recipe) {
        recipe.ingredients = [...recipe.ingredients,req.body.value];
        await recipe.save();
        res.send("Added Ingredient");
    }
    else {
    res.send("failed to add ingredient");
    }
})

router.put("/recipe/:name/instruction", async (req: Request, res: Response) => {
    const recipe = await Recipe.findOne({name: req.params.name});
    if (recipe) {
        recipe.instructions = [...recipe.instructions,req.body.value];
        await recipe.save();
        res.send("Added Instruction");
    }
    else {
    res.send("failed to add instruction");
    }
})

router.post("/recipe", async (req: Request, res: Response) => {
    const { name, description, image, ingredients, instructions } = req.body
    let recipe = new Recipe({
        name,
        description,
        image,
        ingredients,
        instructions
      })
   
      try {
        recipe = await recipe.save();
        res.send(`Recipe named ${name}  added to collection`);
      } catch(error: any) {

        res.status(500).send(error.message)
        console.log(`error is ${error.message}`)
      }
})



export default router;
