import { Express, request, Request, Response } from "express";
import { Recipe } from "./models/recipes";

const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
app.use(express.json());

const mongoose = require('mongoose')
const connection_url = "mongodb+srv://newUser0:newPassword0@cluster0.obbto6z.mongodb.net/RecipesDB?retryWrites=true&w=majority"
mongoose.connect(connection_url)
.then(() => console.log('Successfully connected'))
.catch((error: any) => console.log(`Could not connect due to ${error}`))


app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!')
});

app.get('/recipes', async (req: Request, res: Response) => {
  const recipes = await Recipe.find({})
  res.send(recipes)
})

app.get('/recipes/:recipeName', async (req: Request, res: Response) => {
  const recipe_name = await Recipe.find({})
  const recipe = await Recipe.findOne({name: recipe_name})
})

app.post('/recipes', async (req: Request, res: Response) => {
  const {category, name, description, image, ingredients, instructions} = req.body;
  let new_recipe = new Recipe({
    category,
    name,
    description,
    image,
    ingredients,
    instructions
  })

  try {
    new_recipe.save();
    res.send(`${name} successfully loaded.`);
  }
  catch(error: any){
    res.status(500).send(error.message);
    console.error(error.message)
  }
})

app.put('/recipes/:recipeName/ingredients', async (req: Request, res: Response) => {
  const recipe_name = req.params.recipeName;
  const ingredient = req.body.newIngredient;

  const recipe = await Recipe.findOne({name: recipe_name});

  if (recipe){
    try {
      recipe.ingredients.push(ingredient)
      res.send('Recipe ingredients updated.')
    }
    catch(err: any){
      res.sendStatus(500).send(`ERROR: ${err.message}`)
    }
  }
  else{
    res.send('Recipe not found.')
  }
})

app.put('/recipes/:recipeName/instructions', async (req: Request, res: Response) => {
  const recipe_name = req.params.recipeName;
  const instruction = req.body.newInstruction;

  const recipe = await Recipe.findOne({name: recipe_name})

  if (recipe) {
    try {
      recipe.instructions.push(instruction)
      res.send('Recipe instruction updated.')
    }
    catch(err: any){
      res.sendStatus(500).send(`Error: ${err.message}`)
    }
  }
  else{
    res.send('Recipe not found.')
  }
})

app.listen(3001);

