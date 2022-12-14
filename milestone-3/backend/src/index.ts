import { Express } from "express";
import RecipeModel from "./models/Recipe";

const express = require("express");
const cors = require("cors");

const app: Express = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    next();
});

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
    
    const recipe = await RecipeModel.findOne({name: recipeName});
    res.send(recipe);
});

// post: add a new recipe
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
app.put("/recipe/:recipeID/ingredient", async (req, res) => {
    const recipeID = req.params.recipeID;
    const ingredient = req.body.newIngredient;

    //console.log(req.params);
    //console.log(recipeID);
    //console.log(ingredient);

    const filter = {_id: recipeID};
    const recipe = await RecipeModel.findOneAndUpdate(filter, {$push: {ingredients: ingredient}});

    //console.log("recipe: " + recipe);

    res.send(`Ingredient ${ingredient} added to recipe ${recipe?.name}`);
});

// add new instruction
app.put("/recipe/:recipeID/instruction", async (req, res) => {
    const recipeID = req.params.recipeID;
    const instruction = req.body.newInstruction;

    const filter = {_id: recipeID};
    const recipe = await RecipeModel.findOneAndUpdate(filter, {$push: {instructions: instruction}});

    res.send(`Instruction ${instruction} added to recipe ${recipe?.name}`);
});

app.listen(3001);