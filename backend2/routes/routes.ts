import express, {Request, Response, Router} from "express";
import  recipeModel from "../models/recipeSchema";
const router: Router = express.Router() 

export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  }


//get all recipes 
router.get("/recipe", async(req: Request, res: Response) => {
    const recipes = await recipeModel.find({});
    //console.log(recipes)
    res.send(recipes)
});

//get a specific recipe
router.get("/recipe/:recipeName", async(req: Request, res: Response) => {
    const recipes = await recipeModel.find({name: req.params.recipeName})
    //console.log(recipes)
    res.send(recipes)
});


//create a recipe
router.post("/recipe", async(req: Request, res: Response) => {
    //take all of the info from the body
    const {name, description, image, ingredients, instructions} = req.body


    let recipe = new recipeModel({ name, description, image, ingredients, instructions })

    try{
        recipe = await recipe.save()
        res.send("recipe ${name} was added to the collection")
    }
    catch{res.send("failed to add ${name} to the collection")}

})



//update ingredients
router.put("/recipe/:recipeName/ingredient", async(req: Request, res: Response) => {

    try{
        const recipe = await recipeModel.findOne({name: req.params.recipeName})

        if(recipe){

        recipe.ingredients = [...recipe.ingredients, req.body.ingredient]
        await recipe.save()
        res.send("added ingredient")
    }

    }
    catch{res.send("Failed to add ingredients")}
})
router.put("/recipe/:recipeName/instruction", async(req: Request, res: Response) => {
    try {
      const recipe = await recipeModel.findOne({name: req.params.recipeName})
      
      if(recipe){
          recipe.instructions = [...recipe.instructions, req.body.instruction]
          await recipe.save()
          res.send("added instruction")
      }
    } catch (error) {
      console.error(error)
      res.status(500).send("An error occurred while adding the instruction")
    }
  })

export default router;