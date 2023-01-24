import { Express, Request, response, Response } from "express";
import {Recipe} from "./models/Recipe";


const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes 
app.use(express.json());

const mongoose= require('mongoose')
const connection_url="mongodb+srv:"//newUser:newPassword@cluster0.7qauqzf.mongodb.net/?retryWrites=true&w=majority

mongoose.connect(connection_url).then(()=> console.log("Successfully connected!"))
.catch((error) => console.error(`Could not connect due to ${error}`))


app.get('/', (req, res) => {
  res.send('Hello world!')
});

app.get("/recipe", async (req: Request, res: Response)=>{

  const recipes= await Recipe.find({})
  res.send(recipes)
})

app.get("/recipe/:recipeName", async (req: Request, res: Response) =>
{
  const {recipeName}=req.params;
  const recipes= await Recipe.findOne({"name": recipeName})
  res.send(recipes)
})

app.post("/recipe", async (req: Request, res: Response) => {
  const recipe = await Recipe.create(req.body)
  res.send("Recipe has been created")
})

app.put("/recipe/:recipeName/ingredient", async (req: Request, res: Response) => {
  const recipeName = req.params.recipeName;
  const ingredient = req.body.newIngredient;
  const recipe = await Recipe.findOne({ 'name': recipeName })

  if (recipe) {
      recipe.ingredients = [...recipe.ingredients, ingredient];
      await recipe.save();
      res.send("Updated is completed")
  }
  else {
      res.send("Update could not be completed")
  }
})

app.put("/recipe/:recipeName/instruction", async (req: Request, res: Response) => {
  const recipeName = req.params.recipeName;
  const instruction = req.body.newInstruction;
  const recipe = await Recipe.findOne({ 'name': recipeName })

  if (recipe) {
      recipe.instructions = [...recipe.instructions, instruction];
      await recipe.save();
      res.send("Updated is completed")
  }
  else {
      res.send("Update could not be completed")
  }
})


app.listen(3001);