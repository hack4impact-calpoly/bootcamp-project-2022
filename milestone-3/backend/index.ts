import { Express, Request, Response, Router } from "express";
import RecipeModel from "./models/RecipeSchema";
const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
const mongoose = require('mongoose');
const connection_url = "mongodb+srv://newUser:newUser@cluster0.iqyoofp.mongodb.net/RecipesDB?retryWrites=true&w=majority";
const router: Router = express.Router();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  next();
});

app.listen(3001);

mongoose.connect(connection_url)
.then(() => console.log("Successfully connected "))
.catch((error: Error) => console.error(`Could not connect: ${error}`));

app.use(express.json());
app.use("/", router);

router.get('/', (req, res) => {
  res.send('Hello world!')
});

// For returning an array of all recipes
router.get("/recipe", async (req: Request, res: Response) => {
  // Queries the database for all recipes and compiles them into a list
  const recipes = await RecipeModel.find({});
  //Returns that list of all recipes to the requester 
  res.send(recipes);
})

// For returning the first recipe matching a particular name
router.get("/recipe/:recipeName", async (req: Request, res: Response) => {
  // Queries the database for any recipes with a property matching "name": {the name inputted in the URL}
  // and compiles them into a list
  const recipe_with_name = await RecipeModel.findOne({"name": req.params.recipeName})
  // Returns that list of recipes
  res.send(recipe_with_name)
})

// For adding a new recipe to the database
router.post("/recipe", async (req: Request, res: Response) => {
  // Uses the .create() function built into Mongoose's Document class to
  // create a new document based on the requester input. This input is interpreted as 
  // a JSON input as a result of app.use(express.json())
  await RecipeModel.create(req.body)
  res.send("Recipe was added successfully")
})

// For adding a new ingredient to the first recipe matching a particular name
router.put("/recipe/:recipeName/ingredient", async (req: Request, res: Response) => {
  // Saves the recipe name as passed in the URL
  const recipeName = req.params.recipeName;
  // Saves the newIngredient property as passed in the body of the request. The request
  // body is automatically interpreted as a JSON input as a result of app.use(express.json()). 
  const ingredient = req.body.newIngredient;
  // Uses Mongoose's built-in findOne() method to find the first recipe matching
  // "name": {the name inputted into a URL} 
  const recipe = await RecipeModel.findOne({"name": recipeName})
  
  // Checks if the recipe variable is truthy (i.e., NOT null)
  if(recipe)
  {
    // Appends the new ingredient to the recipe's ingredients property
    recipe.ingredients.push(ingredient)
    // Runs Mongoose's .save() on the new recipe, updating it in the database
    await recipe.save()
    // Sends a confirmation message to the user
    res.send("Recipe successfully updated with new ingredient")
  }
  else
  {
    // Sends a failure message to the user
    res.send("Recipe not found")
  }
})

// For adding a new instruction step to the first recipe matching a particular name
router.put("/recipe/:recipeName/instruction", async (req: Request, res: Response) => {
  // Saves the recipe name as passed in the URL
  const recipeName = req.params.recipeName;
  // Saves the newInstruction property as passed in the body of the request. The request
  // body is automatically interpreted as a JSON input as a result of app.use(express.json()). 
  const instruction = req.body.newInstruction;
  // Uses Mongoose's built-in findOne() method to find the first recipe matching
  // "name": {the name inputted into a URL} 
  const recipe = await RecipeModel.findOne({"name": recipeName})
  
  // Checks if the recipe variable is truthy (i.e., NOT null)
  if(recipe)
  {
    // Appends the new ingredient to the recipe's ingredients property
    recipe.instructions.push(instruction)
    // Runs Mongoose's .save() on the new recipe, updating it in the database
    await recipe.save()
    // Sends a confirmation message to the user
    res.send("Recipe successfully updated with new step")
  }
  else
  {
    // Sends a failure message to the user
    res.send("Recipe not found")
  }
})

export default router;