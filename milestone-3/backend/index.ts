import { Express } from "express";
import { Request, Response } from "express";
import Recipe from "./models/recipeSchema";
import mongoose from "mongoose";
import cors from "cors";

const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
app.use(cors());
app.use(express.json());


const url = "mongodb+srv://admin:Password123!@cluster0.wpowvdu.mongodb.net/RecipesDB?retryWrites=true&w=majority";

mongoose.connect(url)
.then(() => console.log("Connected to MongoDB!"))
.catch((err) => console.log(`Error connecting to DB: ${err}`));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    next();
  });

app.get('/', (_req, res) => {
  res.send('Hello world!')
});


app.get("/recipe", async (req: Request, res: Response) => {
    const recipes = await Recipe.find({})
    console.log(recipes);
    res.send(recipes);

})

app.get("/recipe/:name", async (req: Request, res: Response) => {
    const recipes = await Recipe.find({ name: req.params.name });
    console.log(recipes);
    res.send(recipes);
})

app.put("/recipe/:name/ingredient", async (req: Request, res: Response) =>{
    const recipe = await Recipe.findOne({ name: req.params.name });
    if (recipe) {
    recipe.ingredients = [...recipe.ingredients, req.body.ingredient];
    await recipe.save();
    res.send("Added ingredient");
    }
    res.send("Failed to add ingredient");
});

app.put("/recipe/:name/instruction", async (req: Request, res: Response) =>{
    const recipe = await Recipe.findOne({ name: req.params.name });
    if (recipe) {
    recipe.instructions = [...recipe.instructions, req.body.instruction];
    await recipe.save();
    res.send("Added instruction");
    }
    res.send("Failed to add instruction");
});


app.post("/recipe", async (req: Request, res: Response) => {
    const {name, description, image, ingredients, instructions} = req.body
    let recipe = new Recipe ({
        name, 
        description,
        image,
        ingredients,
        instructions
    })

    try {
        recipe = await recipe.save()
        res.send(`Recipe ${name} added to collection`)
    } catch(error) {
        if (error instanceof Error) {
            res.status(500).send(error.message)
        console.log(`error is ${error.message}`) 
        } else {
            console.log("Unknown error")
        }
    }
})

app.listen(3001);