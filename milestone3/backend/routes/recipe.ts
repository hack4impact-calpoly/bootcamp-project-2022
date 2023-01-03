import express, {Request, Response, Router} from "express"
import Recipe from "../models/recipeSchema"

const router: Router = express.Router();

// get the recipe
router.get("/recipe", async(req: Request, res: Response) => {
    const recipes = await Recipe.find({});
    console.log(recipes);
    res.send(recipes);
});

// get recipe by name
router.get("/recipe/:name", async(req: Request, res: Response) => {
    const recipes = await Recipe.find({name: req.params.name});
    console.log(recipes);
    res.send(recipes);
})

// update: ingredient

router.put("/recipe/:name/ingredient", async(req: Request, res: Response) => {
    const recipe = await Recipe.findOne({name: req.params.name});
    if (recipe){
        recipe.ingredients = [...recipe.ingredients, req.body.ingredient]; //adds the ingredient using array destructuring
        await recipe.save();
        res.send("Added Ingredient");
    }
    else{
        res.send("Could not add ingredient.")
    }
    
})

// update: instruction

router.put("/recipe/:name/instruction", async(req: Request, res: Response) => {
    const recipe = await Recipe.findOne({name: req.params.name});
    if (recipe){
        recipe.instructions = [...recipe.instructions, req.body.instruction]; //adds the ingredient using array destructuring
        await recipe.save();
        res.send("Added Instruction");
    }
    else{
        res.send("Could not add instruction.")
    }

})

// add new recipe

router.post("/recipe", async(req: Request, res: Response) => {
    const { name, description, image, ingredients, instructions } = req.body
    let recipe = new Recipe({
        name,
        description, 
        image,
        ingredients,
        instructions
    })

    try {
        recipe = await recipe.save()
        res.send(`${name} was added to the collection`)
      } catch(error) {
        res.send("Error")
    }
});

export default router