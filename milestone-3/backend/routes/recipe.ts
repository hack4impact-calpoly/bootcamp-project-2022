import express, {Request, Response, Router} from "express";
import Recipe from "../models/RecipeSchema";

const router : Router = express.Router();
router.get("/recipe", async (req: Request, res: Response) => {
    const recipes = await Recipe.find({})
    res.send(recipes)
  })

  router.get("/recipe/:recipeName", async (req: Request, res: Response) => {
    const recipes = await Recipe.find({name: req.params.name})
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

export default router;