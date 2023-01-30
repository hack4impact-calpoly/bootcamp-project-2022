import { Express,Request,Response } from "express";
import Recipe from "./models/recipeSchema";
const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
app.use(express.json());
const mongoose = require('mongoose')
const connection_url = "mongodb+srv://newUser:123@cluster0.zpbbhoi.mongodb.net/RecipesDB?retryWrites=true&w=majority"

mongoose.connect(connection_url)
.then(()=> console.log('Successfully connected'))
.catch((error:Error)=> console.error(`Could not connect due to ${error}`))
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  next();
});
app.use(express.json());

app.get("/recipe", async (req: Request, res: Response) => {
  const recipes = await Recipe.find({})
  res.send(recipes)
})



app.get("/recipe/:recipeName", async (req: Request, res: Response) => {
  const name = req.params.recipeName
  const recipe = await Recipe.findOne({'name':name})
  res.send(recipe)
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
      await recipe.save()
      res.send(`Recipe called ${name} added to database`)
  } catch(error : any) {
    res.status(500).send(error.message)
    console.log(`error is ${error.message}`)
  }
});

app.put("/recipe/:recipeName/ingredient", async (req: Request, res: Response) => {
  const recipeName = req.params.recipeName;
  const ingredient = req.body.newIngredient;

  let recipe = await Recipe.findOne({'name':recipeName})
  recipe?.ingredients.push(ingredient)
  try {
    await recipe?.save()
    res.send(`Ingredient called ${ingredient} added to database for ${recipeName}`)
} catch(error : any) {
  res.status(500).send(error.message)
  console.log(`error is ${error.message}`)
}
});

app.put("/recipe/:recipeName/instruction", async (req: Request, res: Response) => {
  const recipeName = req.params.recipeName;
  const instruction = req.body.newInstruction;

  let recipe = await Recipe.findOne({'name':recipeName})
  recipe?.instructions.push(instruction)
  try {
    await recipe?.save()
    res.send(`Ingredient called ${instruction} added to database for ${recipeName}`)
} catch(error : any) {
  res.status(500).send(error.message)
  console.log(`error is ${error.message}`)
}
});


app.get('/', (req, res) => {
  res.send('Hello world!')
});

app.listen(3001);