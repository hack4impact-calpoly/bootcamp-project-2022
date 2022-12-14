import { Express, Request, Response } from "express";
import { Recipe } from "./models/recipeSchema"
const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
const mongoose = require('mongoose')
const connection_url = "mongodb+srv://new_user:newPassword@cluster0.q7jauti.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(connection_url)
.then(() => console.log('Successfully Connected'))
.catch((error: any) => console.error(`Could not connect due to ${error}`))
app.use(express.json());

app.get("/recipe", async (req: Request, res: Response) => {
    const recipes = await Recipe.find({})
    res.send(recipes)
  })


app.get("/recipe/:name", async (req: Request, res: Response) => {
    const {name} = req.params;
    const recipeName = await Recipe.findOne({
    'name': name
    })
    res.send(recipeName)
})

app.post("/recipe", async (req: Request, res: Response) => {
    const { name, image, description, ingredients, instructions } = req.body
    let recipe = new Recipe({
        name, 
        image,
        description,
        ingredients,
        instructions
    })
    try {
        recipe = await recipe.save()
        res.send(`Recipe called ${name} added to database`)
    } catch(error) {
        if (error instanceof Error) {
            res.status(500).send(error.message)
            console.log(`error is ${error.message}`)
        }
        else {
            console.log("Error is unkown")
        }
    }
});

app.put("/recipe/:recipeName/ingredient", async (req: Request, res: Response) => {
    const recipeName = req.params.recipeName;
    const ingredient = req.body.newIngredient;
    let name = await Recipe.findOne({
        'name': recipeName
    })
    name?.ingredients.push(ingredient)
    try {
        await name?.save()
        res.send(`${ingredient} has been added to the recipe for ${recipeName}`)
    } catch(error) {
        if (error instanceof Error) {
            res.status(500).send(error.message)
            console.log(`error is ${error.message}`)
        } else {
            console.log("Error is unknown")
        }
    }
});

app.put("/recipe/:recipeName/instruction", async (req: Request, res: Response) => {
    const recipeName = req.params.recipeName;
    const instruction = req.body.newInstruction;
    let name = await Recipe.findOne({
        'name': recipeName
    })
    name?.instructions.push(instruction)
    try {
        await name?.save()
        res.send(`${instruction} has been added to the recipe for ${recipeName}`)
    } catch(error) {
        if (error instanceof Error) {
            res.status(500).send(error.message)
            console.log(`error is ${error.message}`)
        } else {
            console.log("Error is unknown")
        }
    }
});


app.listen(3005);