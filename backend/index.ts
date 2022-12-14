import { Express } from "express";
import Recipe from "./models/recipeSchema";
import router from "./routes/recipe";
const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
app.use(express.json());
const mongoose = require('mongoose')
const connection_url = 'mongodb+srv://newUser:newPassword@cluster0.66l23vd.mongodb.net/RecipesDB?retryWrites=true&w=majority'

import recipeRoutes from "./routes/recipe";

app.use("/recipe", recipeRoutes)

mongoose.connect(connection_url)
.then(()=> console.log('Successfully connected'))
.catch((error:any) => console.error('Could not connect due to ${error}'))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    next();
});

app.post("/recipe", async (req, res) => {
    const { name, image, description, ingredients,  instructions} = req.body
    let recipe = new Recipe({
        name,
        image,
        description,
        ingredients,
        instructions
    })
    try {
        recipe = await recipe.save()
        res.send(`Recipe for ${name} added to collection`)
    } catch(error: any) {
        res.status(500).send(error.message)
        console.log(`error is ${error.message}`)
    }
});

router.put("/:name/ingredient", async (req, res) => {
    const name = req.params.name;
    const ingredient = req.body.newIngredient;
    const recipes = await Recipe.findOne({name: name});
    if (recipes){
        recipes.ingredients = [...recipes.ingredients, ingredient];
        await recipes.save();
        res.send("Ingredient added");
    }
    else{
        res.send("Failed to add new ingredient");
    }
});

router.put("/:name/instruction", async (req, res) => {
    const name = req.params.name;
    const instruction = req.body.newInstruction;
    const recipes = await Recipe.findOne({name: name});
    if (recipes){
        recipes.instructions = [...recipes.instructions, instruction];
        await recipes.save();
        res.send("Instruction added");
    }
    else{
        res.send("Failed to add new instruction");
    }
});


app.listen(3001);