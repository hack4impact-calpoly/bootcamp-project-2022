import { Express } from "express";
import RecipeModel from "./models/Recipe";

const express = require("express");
const app: Express = express();
app.use(express.json());

const mongoose = require("mongoose");
const CONNECTION_URL = "mongodb+srv://BootcampUser:bootcamp2022@bootcampcluster.0pycjdu.mongodb.net/RecipesDB?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL)
  .then(() => console.log("Successfully Connected"))
  .catch((error:any) => console.error(`Could not connect due to ${error}`));

// get all
app.get("/recipe", async (req, res) => {
    const recipes = await RecipeModel.find();
    res.send(recipes);
});

// get specific recipe
app.get("/recipe/:recipeName", async (req, res) => {
    const recipeName = req.params.recipeName;
    
    const recipe = await RecipeModel.findOne({"name": recipeName});
    res.send(recipe);
});

// post
app.post("/recipe", async (req, res) => {
    /**
     * Recipe
    _id: string;
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
    */

    const { _id, name, description, image, ingredients, instructions } = req.body;

    let recipe = new RecipeModel({
        _id,
        name,
        description,
        image,
        ingredients,
        instructions 
    });

    try {
        recipe = await recipe.save();
        res.send(`Recipe named ${name} added to collection`);
    } catch (error:any) {
        res.status(500).send(error.message);
        console.log("Error: " + error.message);
    }
});

// add new ingredient
app.put("/recipe/:recipeName/ingredient", async (req, res) => {
    const recipeName = req.params.recipeName;
    const ingredient = req.body.newIngredient;

    const filter = {"name": recipeName};
    const recipe = RecipeModel.findOne(filter)
        .then(async (entity:any) => {
            let ingredients = entity.ingredients;
            ingredients.push(ingredient);

            await RecipeModel.updateOne(filter, {"ingredients": ingredients});
            res.send(`Ingredient ${ingredient} added to recipe ${recipeName}`);
        })
        .catch((e) => {
            res.status(500).send(e.message);
            console.log("Error: " + e.message); 
        });
});

// add new instruction
app.put("/recipe/:recipeName/instruction", async (req, res) => {
    const recipeName = req.params.recipeName;
    const instruction = req.body.newInstruction;

    const filter = {"name": recipeName};
    const recipe = RecipeModel.findOne(filter)
        .then(async (entity:any) => {
            let instructions = entity.instructions;
            instructions.push(instruction);

            await RecipeModel.updateOne(filter, {"instructions": instructions});
            res.send(`Instruction ${instruction} added to recipe ${recipeName}`);
        })
        .catch((e) => {
            res.status(500).send(e.message);
            console.log("Error: " + e.message); 
        });
});

app.listen(3001);