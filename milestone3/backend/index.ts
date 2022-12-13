import { Express } from "express";
import mongoose from "mongoose";
import controller from "./controller";

const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
const connectionUrl = "mongodb+srv://sasha:sasha@cluster0.nd4oroc.mongodb.net/db?retryWrites=true&w=majority"
mongoose.connect(connectionUrl).then(() => {
  console.log("Connected to MongoDB");
});


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world!')
});

app.get('/recipe', async (req, res) => {
  const recipes = await controller.getRecipes();
  res.send(recipes);
});

app.get('/recipe/:recipeName', async (req, res) => {
  const recipe = await controller.getRecipe(req.params.recipeName);
  res.send(recipe);
});

app.post('/recipe', async (req, res) => {
  const recipe = await controller.createRecipe(req.body);
  res.send(recipe);
});

app.post('/recipe/:recipeName/ingredients', async (req, res) => {
  const recipe = await controller.addIngredient({
    name: req.params.recipeName,
    ingredient: req.body.ingredient
  });
  res.send(recipe);
});

app.post('/recipe/:recipeName/instructions', async (req, res) => {
  const recipe = await controller.addInstruction({
    name: req.params.recipeName,
    instruction: req.body.instruction
  });
  res.send(recipe);
});

// error handler

app.use((err: Error, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).send('Something broke! - ' + err.message);
});


app.listen(3001);