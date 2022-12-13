import { Express, Request, Response } from "express";
import { Recipe } from "./models/Recipe";
const mongoose = require("mongoose")
const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
app.use(express.json());


const url = "mongodb+srv://madhavasok:newPassword@cluster0.vjzkqpw.mongodb.net/RecipesDB?retryWrites=true&w=majority"

mongoose.connect(url)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err: any) => console.log(`Error connecting to DB: ${err}`));


app.get('/', (req, res) => {
    res.send('Hello world!')
});


app.get("/recipe", async (req: Request, res: Response) => {
    const recipes = await Recipe.find({})
    res.send(recipes)
})

app.get("/recipe/:recipeName", async (req: Request, res: Response) => {
    const { recipeName } = req.params;
    const recipes = await Recipe.findOne({ 'name': recipeName })
    res.send(recipes)
})

app.post("/recipe", async (req: Request, res: Response) => {
    const recipe = await Recipe.create(req.body)
    res.send("Recipe created")
})

app.put("/recipe/:recipeName/ingredient", async (req: Request, res: Response) => {
    const recipeName = req.params.recipeName;
    const ingredient = req.body.newIngredient;
    const recipe = await Recipe.findOne({ 'name': recipeName })

    if (recipe) {
        recipe.ingredients = [...recipe.ingredients, ingredient];
        await recipe.save();
        res.send("Updated Completed")
    }
    else {
        res.send("Update failed")
    }
})

app.put("/recipe/:recipeName/instruction", async (req: Request, res: Response) => {
    const recipeName = req.params.recipeName;
    const instruction = req.body.newInstruction;
    const recipe = await Recipe.findOne({ 'name': recipeName })

    if (recipe) {
        recipe.instructions = [...recipe.instructions, instruction];
        await recipe.save();
        res.send("Updated Completed")
    }
    else {
        res.send("Update failed")
    }
})


app.listen(3001);

