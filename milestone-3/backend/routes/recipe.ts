import express, {Request, Response, Router} from 'express';
import Recipe from "../models/recipeSchema"

const router: Router = express.Router()

// get all recipe 
router.get("/recipe", async(reqq: Request, res: Response)=>{
    const recipes=await Recipe.find({});
    console.log(recipes);
    res.send(recipes);
})

export default router;