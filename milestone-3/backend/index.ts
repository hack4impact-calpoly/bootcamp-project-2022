import { Request, Response, Express } from "express"; // Importing the required types
import Recipe from "./models/recipeSchema"; // Importing the Recipe schema


const express = require("express"); // 1. Includes the Express library
const app: Express = express(); // 2. Initializes the Express application

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  next();
});

const mongoose = require("mongoose"); // Importing the Mongoose library for working with MongoDB
const connection_url = "mongodb+srv://admin:LyrLDXvV8xnA1JCf@cluster0.ra7xb3t.mongodb.net/?retryWrites=true&w=majority" // Connection URL for our MongoDB database

// Tells the Express app to interpret the body as JSON
app.use(express.json()) 

// Connects to the MongoDB database
mongoose.connect(connection_url)
  .then(() => console.log('Successfully Connected')) // Logs a success message if the connection is successful
  .catch((err: any) => console.error(`Could not connect due to ${err}`)) // Logs an error message if the connection fails

// Basic GET request
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
});

// Responds with list of all recipes
app.get('/recipe', async (req: Request, res: Response)=> {
    // Retrieves all recipes from the database
    const recipes = await Recipe.find({})
    res.send(recipes) // Sends the retrieved recipes as a response
})

// Responds with a specific recipe
app.get('/recipe/:recipeName', async (req: Request, res: Response) => {
    // Look for a recipe with the given name in the Recipe collection
    const rec = await Recipe.findOne({
        name: req.params.recipeName
    }).catch((err) => {
        // Send error message if there is an error while fetching
        res.send(`ERROR Could not fetch recipe because of the following error:      
        ${err}`)
    })
    if (rec) {
        // If the recipe is found, send it as response
        res.send(rec)    
    } else{
        // If the recipe is not found, send an error message
        res.send("Could not find recipe :(")
    }
})


app.post('/recipe', async (req: Request, res: Response) => {
    // Create a new recipe with the given data
    await Recipe.create({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        // external: req.body.external
    }).catch((err) => {
        // If there is an error creating the recipe, send an error message
        res.send(`ERROR Recipe could not be added because of the following error:        
         ${err}`)
    })
    // If the recipe was created successfully, send a success message
    res.send("Recipe added successfully")
})


app.put('/recipe/:recipeName/ingredient', async (req: Request, res: Response) =>{
    // Retrieve the recipe name and ingredients
    const recipeName = req.params.recipeName;
    const ingredient = req.body.ingredient;
    // Attempt to find the recipe in the Database
    const recipe = await Recipe.findOne({
        name: recipeName
    })
    if (recipe) {
        // If the recipe is found, add the new ingredient to the recipe's ingredients list
        recipe.ingredients = [...recipe.ingredients, ingredient]
        // Save the updated recipe to the database
        await recipe.save().catch((err) => {
            // If there is an error saving the recipe, send an error message
            res.send(`ERROR Ingredient could not be added because of the following error:       
            ${err}`)
        })
        // If the ingredient was added successfully, send a success message
        res.send("Ingredient added successfully")
    } else {
        // If the recipe does not exist, send an error message
        res.send("Failed to add ingredient because recipe does not exist")
    }
})


app.put('/recipe/:recipeName/instruction', async (req: Request, res: Response) =>{
    // Retrieve the recipe name, instruction, and position data from the request
    const recipeName = req.params.recipeName;
    const instruction = req.body.instruction;
    const position = req.body.position - 1; // position is 1-based and optional
    
    // Look for the recipe in the database
    const recipe = await Recipe.findOne({
        name: recipeName
    })
    if (recipe && instruction) {  
        // If the recipe name and instruction are valid, add the instruction to the recipe's instructions list
        if (position >= 0) {
            // If a valid position was provided, insert the instruction at that position
            if (position > recipe.instructions.length){
                // If the position is invalid, send an error message
                res.send("Please enter valid position")
            }
            else{
                // Add instruction to the appropriate position
                recipe.instructions.splice(position, 0, instruction)
            }
        }
        else {
            // If no position was provided, append the instruction to the end of the instructions list
            recipe.instructions = [...recipe.instructions, instruction]
        }
        // Save the updated recipe to the database
        await recipe.save().catch((err) => {
            // If there is an error saving the recipe, send an error message
            res.send(`ERROR Instruction could not be added because of the following error:       
            ${err}`)
        })
        // If the instruction was added successfully, send a success message
        res.send("Instruction added successfully")
    } else{
        // If the recipe or instruction is not valid, send an error message
        if (!instruction){
            res.send("Enter valid instruction")
        } else{
            res.send("Failed to add instruction, please enter valid recipe")
        }
    }
})



app.listen(3001);