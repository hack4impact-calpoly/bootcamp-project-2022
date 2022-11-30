import { Express, request, Request, Response, Router } from "express";
import { Recipe } from "./models/recipes";
const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
app.use(express.json());
// import * as mongoose from 'mongoose';
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  next();
});
const mongoose = require('mongoose');

const connection_url: string = 'mongodb+srv://admin:LglTKD77paOLMeul@jesuscooks.dk3c891.mongodb.net/RecipesDB?retryWrites=true&w=majority';
mongoose.connect(connection_url)
.then(() => {console.log('SUCCESSFUL CONNECTION');}
)
.catch((err:string) => console.error(`FAILED: ${err}`))


app.get('/', (req: Request, res: Response) => {
  res.send('HELLO WORLD')
});

app.get('/recipes', async (req: Request, res: Response) => {
    const recipes = await Recipe.find({})
    res.send(recipes)
})

app.get('/recipes/:recipeName', async (req: Request, res: Response) => {
  const recipe_name = req.params.recipeName
  const recipe = await Recipe.findOne({name: recipe_name})
  res.send(recipe)
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
  
  try{
    new_recipe.save();
    res.send(`${name} added to the recipes!`);
  }
  catch(error: any){
    res.status(500).send(error.message);
    console.error(error.message)
  }
})

app.put('/recipes/:recipeName/ingredients', async (req: Request, res: Response) => {
  const recipe_name = req.params.recipeName;
  const ingredient: {title: string, ingredients: string[]} = req.body

  const recipe = await Recipe.findOne({name: recipe_name});
  
  if (recipe){
    try{
    let index = recipe.ingredients.findIndex((ing) => ing.title == ingredient.title)
    if (index != -1){
      recipe.ingredients[index].ingredients.push(...ingredient.ingredients);
      recipe.save()
    }
    else{
      recipe.ingredients.push(ingredient)
    }
    res.send(`RECIPE UPDATED!`)
  }
  catch(err: any){
    res.sendStatus(500).send(`ERROR: ${err.message}`)
  }
  }
  else{
    res.send('RECIPE NOT FOUND')
  }
})

app.put('/recipes/:recipeName/instructions', async (req: Request, res: Response) => {
  const recipe_name = req.params.recipeName;
  const instruction: {mainList: string, subList: string[]} = req.body;

  const recipe = await Recipe.findOne({name: recipe_name});
  
  if (recipe){
    let index = recipe.instructions.findIndex((ing) => ing.mainList == instruction.mainList)
    if (index != -1){
      recipe.instructions[index].subList.push(...instruction.subList);
      recipe.save()
    }
    else{
      recipe.instructions.push(instruction)
    }
    res.send(`RECIPE UPDATED!`)
  }
  else{
    console.error('RECIPE NOT FOUND')
  }
})

app.delete('/recipes/:recipeName/ingredients', async (req: Request, res: Response) => {
  const recipe_name = req.params.recipeName;
  const position: number[] = req.body.position;

  const recipe = await Recipe.findOne({name: recipe_name});
  
  if (recipe){
    try{
      if (position.length == 1){
        recipe.instructions.splice(position[0], 1)
        recipe.save()
        res.send('DELETED INGREDIENT.')
      }
      else{
        recipe.ingredients[position[0]].ingredients.splice(position[1], 1)
        recipe.save()
        res.send('DELETED INGREDIENT.')
      }
    }
    catch(err){
      res.send(`Error: ${err}`)
    }
     
  }
  else{
    console.error('RECIPE NOT FOUND')
  }
})


app.delete('/recipes/:recipeName/instructions', async (req: Request, res: Response) => {
  const recipe_name = req.params.recipeName;
  const position: number[] = req.body.position;

  const recipe = await Recipe.findOne({name: recipe_name});
  
  if (recipe){
    try{
      if (position.length == 1){
        recipe.instructions.splice(position[0], 1)
        recipe.save()
        res.send('DELETED INGREDIENT.')
      }
      else{
        recipe.instructions[position[0]].subList.splice(position[1], 1)
        recipe.save()
        res.send('DELETED INGREDIENT.')
      }

    }
    catch(err){
      res.sendStatus(500).send(`Error: ${err}`)
    }
     
  }
  else{
    console.error('RECIPE NOT FOUND')
  }
})


app.delete('/recipes/', async (req: Request, res: Response) => {
  const {recipe_name} = req.body;
  try{
    const recipe = await Recipe.findOne({name: recipe_name})
    if (recipe){
      recipe.remove()
      res.send(`${recipe_name} removed succesfully`)
    }
    else{
      res.send("RECIPE DOESN'T EXIST.")
    }
  }
  catch(error: any){
    res.status(500).send('Something went wrong.')
    console.error(error)
  }

})

app.delete('/recipes/:recipeName', async (req: Request, res: Response) => {
  const recipe_name = req.params.recipeName;
  try{
    const recipe = await Recipe.findOne({name: recipe_name})
    if (recipe){
      recipe.remove()
      res.send(`${recipe_name} removed succesfully`)
    }
    else{
      res.send("RECIPE DOESN'T EXIST.")
    }
  }
  catch(error: any){
    res.status(500).send('Something went wrong.')
    console.error(error)
  }

})

app.listen(3010);