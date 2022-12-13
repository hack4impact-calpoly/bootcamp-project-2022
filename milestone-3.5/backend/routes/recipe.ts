import express, {application, Request, response, Response, Router} from "express";
import Recipe from "../models/recipeSchema";

const router: Router = express.Router(); 
router.use(express.json());
//get all recipes
router.get("/", async(req: Request, res: Response)=>{
    try{
        const recipes = await Recipe.find({});
        console.log(recipes); 
        res.send(recipes);
    }catch(error){
        res.send("failed");
    }
    
});

//get recipe by name
router.get("/:name", async(req: Request, res: Response) => {
    try{
        const recipes = await Recipe.findOne({name: req.params.name});
        console.log(recipes); 
        res.send(recipes); 
    }catch(error){
        res.send("failed");
    }
});

//update ingredient in recipe
router.put("/:name/ingredient", async (req: Request, res: Response)=>{
    
    const recipe = await Recipe.findOne({ name: req.params.name });

    if(recipe){
        recipe.ingredients = [...recipe.ingredients, req.body.ingredient];
        await recipe.save();
        res.send("Added ingredient"); 
    }
});

//create recipe
router.post("/", async (req: Request, res: Response) => {
    try{
        await Recipe.create(req.body);
        res.send("Created recipe");
    }catch(error){
        res.send("fail");
    }
});

//add instruction
router.put("/:name/instruction", async (req: Request, res: Response) => {
    const recipe = await Recipe.findOne({name: req.params.name});
    if(recipe){
        recipe.instructions = [...recipe.instructions, req.body.instruction];
        await recipe.save();
        res.send("Instruction added");
    }
});

export default router; 