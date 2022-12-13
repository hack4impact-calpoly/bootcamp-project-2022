import { Express, Request, Response, Router } from "express"; 
//need to import request and response, otherwise there's an erorr with the CRUD endpoints
import {Document, Schema, model} from "mongoose";

const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
app.use(express.json());
const mongoose = require('mongoose');
const connection_url = 'mongodb+srv://admin:<password>@cluster0.yoipixd.mongodb.net/RecipesDB?retryWrites=true&w=majority'

//to fix CORS error
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  next();
});

export interface IRecipe extends Document {
  name: string;
  image: string;
  desc: string;
  alt: string;
  url: string;
  ingredients: string[];
  steps: string[];
  source: string;
}

const RecipeSchema = new Schema<IRecipe>({
  name: { type: String, required: true},
  image: { type: String, required: true},
  desc: { type: String, required: true},
  alt: { type: String, required: true},
  url: { type: String, required: true},
  ingredients: { type: [String], required: true},
  steps: { type: [String], required: true},
  source: { type: String, required: true},
}, {collection: 'Recipes'}); //including collection is important here cause it connects to right part of the database

const Recipe = model<IRecipe>("Recipes", RecipeSchema);

mongoose.connect(connection_url)
.then(() => console.log('Successfully connected'))
.catch((error: any) => console.error(`Could not connect due to ${error}`)) 
// need that error: any to get rid of some type issue

app.get('/', (req, res) => {
  res.send('Hello world!')
});

//gets all recipes
app.get("/recipe", async (req: Request, res: Response) => {
  const recipes = await Recipe.find({}) //the empty {} returns all objects in database
  res.send(recipes)
})

//gets recipes of specific names
app.get("/recipe/:name", async (req: Request, res: Response) => {
  const recipes = await Recipe.find({
    name: req.params.name //grabs name passed into request from ':name'
  });
  res.send(recipes);
})

//post new recipe
app.use(express.json());
app.post("/recipe", async (req: Request, res: Response) => {
  const { name, image, desc, alt, url, ingredients, steps, source } = req.body
  let newRec = new Recipe({
    name,
    image,
    desc, 
    alt, 
    url,
    ingredients,
    steps,
    source
  })

try {
  newRec = await newRec.save()
  res.send(`Recipe ${name} successfully added to collection`)
} catch(error: any) {
  res.status(500).send(error.message)
  console.log(`error is ${error.message}`)
}
});

//adds ingredient to recipe
app.put("/recipe/:name/ingredient", async (req: Request, res: Response) => {
  const recipeName = req.params.name;
  const ingredient = req.body.newIngredient;
  try {
    const toUpdate = await Recipe.findOneAndUpdate(
      { name: recipeName },
      { $push: { ingredients: ingredient} } //the $push is an operator that adds 'ingredient' to array 'ingredients'
    )
    res.send(`${ingredient} successfully added to recipe ${recipeName}`)
  } catch(error: any) {
    res.status(500).send(error.message)
    console.log(`error is ${error.message}`)
  } 
})

//adds instruction to recipe
app.put("/recipe/:name/instruction", async (req: Request, res: Response) => {
  const recipeName = req.params.name;
  const instruction = req.body.newInstruction;
  try {
    const toUpdate = await Recipe.findOneAndUpdate(
      { name: recipeName },
      { $push: { steps: instruction } }
    )
    res.send(`${instruction} successfully added to recipe ${recipeName}`)
  } catch(error: any) {
    res.status(500).send(error.message)
    console.log(`error is ${error.message}`)
  }
})

app.listen(3001);