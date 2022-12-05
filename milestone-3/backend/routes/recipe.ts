import express, {Request, Response, Router} from "express";
import Recipe from "../models/RecipeSchema";

const router : Router = express.Router();
router.get("/recipe", async (req: Request, res: Response) => {
    const recipes = await Recipe.find({})
    res.send(recipes)
  })

router.get("/recipe/:recipeName", async (req: Request, res: Response) => {
    const recipes = await Recipe.find({name: req.params.recipeName})
    res.send(recipes)
  })
router.post("/recipe", async(req: Request, res: Response) => {
    const{name, description, image, ingredients, instructions} = req.body
    let recipe = new Recipe({
        name, 
        description,
        image,
        ingredients,
        instructions
    })
    try{
        recipe = await recipe.save()
        res.send(`Recipe named ${name} with description ${description} added to collection`)
    } catch(error:any){
        res.status(500).send(error.message)
        console.log(`error is ${error.message}`)
    }
})
router.put("/recipe/:recipeName/ingredients", async (req: Request, res: Response) => {
    const recipe = await Recipe.findOne({name: req.params.recipeName});
    console.log(recipe);
    if (recipe){
        recipe.ingredients = [...recipe.ingredients, req.body.value];
        // recipe.ingredients = [...recipe.ingredients, req.body.ingredient];
        await recipe.save();
        res.send("Success");
    }else{
        res.send("Failed to add ingredient");
    }
});

router.put("/recipe/:recipeName/instructions", async (req: Request, res: Response) => {
    const recipe = await Recipe.findOne({name: req.params.recipeName});
    res.send(req.params.recipeName);
    if (recipe){
        recipe.instructions = [...recipe.instructions, req.body.value];
        await recipe.save();
        res.send("Success");
    }
    else{
        res.send("Failed to add instruction");
    }
});

export default router;