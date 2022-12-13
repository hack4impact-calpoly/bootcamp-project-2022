import Recipe from "../models/recipeSchema";
import express, { Request, Response, Router } from "express";

const app: Router = express.Router()

app.get("/", async (req: Request, res: Response) => {
    // get all recipes 
    const recipes = await Recipe.find({});
    res.send(recipes);
})

app.get("/:name", async (req: Request, res: Response) => {  
    // get specific recipe   
    const {name} = req.params;
    const recipes = await Recipe.findOne({
      name: name
      });
    res.send(recipes);
});

app.post("/person", async (req: Request, res: Response) => {
    // add new recipe 
    const { 
        name,
        image, 
        description, 
        imageAltName, 
        ingredients, 
        instructions, 
        orig_link, 
        orig_link_name, 
        buttonHref 
    } = req.body

    let addedRecipe = new Recipe({
        name, 
        image,
        description, 
        imageAltName, 
        ingredients, 
        instructions, 
        orig_link, 
        orig_link_name, 
        buttonHref 
    })

    try {
      addedRecipe = await addedRecipe.save()
      res.send(`recipe for ${addedRecipe.name} added to collection`)
    } 
    catch(error: any) {
      res.status(500).send(error.message)
      console.log(`error is ${error.message}`)
    }
})



export default app;