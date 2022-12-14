import express, {Request,Response,Router} from "express";
import Recipe from "../models/recipeSchema";

const router: Router = express.Router();

//get all recipes
router.get("/recipe",async (req:Request,res:Response) =>
{
    const recipes = await Recipe.find({});
    console.log(recipes);
    res.send(recipes);
});

//get recipe by name
router.get("/recipe/:name",async (req:Request,res:Response) =>
{
    const recipe = await Recipe.find({name:req.params.name});
    console.log(recipe);
    res.send(recipe);
});

//add ingredient to a recipe
router.put("/recipe/:name/ingredient",async (req:Request,res:Response) =>
{
    const recipe = await Recipe.findOne({name:req.params.name});
    if(recipe)
    {
        recipe.ingredients = [...recipe.ingredients,req.body.ingredient];
        await recipe.save();
        console.log("YELAY",recipe);
        res.send(recipe);
    }
    else
    {
        res.send("Failed to add ingredient.");
    }
});

// create recipe
router.post("/", async (req, res) => {
    try{
		const recipe = new Recipe({
			name: req.body.name,
			description: req.body.description,
			image: req.body.image,
			ingredients: req.body.ingredients,
			instructions: req.body.instructions
		});
		await recipe.save();
		res.send(`Created "${recipe.name}"`);
    }catch(err:unknown)
    {
        if(err instanceof Error) res.send(err.message)
    }
    
	
})

// add instructiion
router.put("/recipe/:name/instruction", async (req, res) => {
    // try{
    //     const name = req.body.name
    //     const instruction = req.body.instructiion
    //     await Recipe.findOneAndUpdate({name: name}, {$push: {instructions: instruction}})
    //     res.send(`Instruction added:  ${name}`)
    // }catch(err:unknown)
    // {
    //     if(err instanceof Error) res.send(err.message)
    // }

    const instruction = await Recipe.findOne({name:req.params.name});
    if(instruction)
    {
        instruction.instructions = [...instruction.instructions,req.body.instruction];
        await instruction.save();
        console.log("YELAY",instruction);
        res.send(instruction);
    }
    else
    {
        res.send("Failed to add ingredient.");
    }
})


export default router;