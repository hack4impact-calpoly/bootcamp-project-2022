import express, {Request, Response, Router}  from "express";
import Recipe from "../models/recipeSchema"

const router: Router = express.Router();

// GET request to get all recipes
router.get("/recipe", async (req: Request, res: Response) => {
	const recipes = await Recipe.find({});
    res.send(recipes);
})

// GET request to get recipe by name
router.get("/recipe/:name", async(req: Request, res, Response)=>{
    const recipe = await Recipe.find({name: req.params.name})
    res.send(recipe);
})

// POST - /recipe - Creates a new recipe given a body
router.post("/recipe", async(req: Request, res, Response)=>{
    const{name, image, description, ingredients, instructions, altDesc} = req.body
    let newRecipe = new Recipe({
        name,
        description,
        image,
        ingredients,
        instructions,
        altDesc
    })
    try {
        newRecipe = await newRecipe.save()
        res.send(`Recipe called ${name} was added to collection`)
    } catch(error: any) {
        res.status(500).send(error.message)
        console.log(`error is ${error.message}`)
        }
})

// PUT - /recipe/:recipeName/ingredient - Adds an ingredient to a given recipe
router.put("/:recipeName/ingredient", async (req: Request, res: Response) => {
    const recipeName = req.params.recipeName;
    const ingredient = req.body.newIngredient;
    const recipe = await Recipe.findOne({name: recipeName});
    
    if (recipe){
        recipe.ingredients = [...recipe.ingredients, ingredient];
        await recipe.save();
        res.send(`${ingredient} was added to ${recipeName}`);

    } else {
        res.send(`Failed to add ${ingredient} to ${recipeName}`);
    }
});

// PUT - /recipe/:recipeName/instruction - Adds an instruction to a given recipe
router.put("/:recipeName/instruction", async (req: Request, res: Response) => {
    const recipeName = req.params.recipeName;
    const instruction = req.body.newInstruction;
    const recipe = await Recipe.findOne({name: recipeName});
    
    if (recipe){
        recipe.instructions = [...recipe.instructions, instruction];
        await recipe.save();
        res.send(`${instruction} was added to ${recipeName}`);
    }else {
        res.send(`Failed to add ${instruction} to ${recipeName}`);
    }
});

export default router;
