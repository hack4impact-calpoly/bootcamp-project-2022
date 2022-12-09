import { Express } from "express";
import recipeRoutes from "./routes/recipe";

const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express


const mongoose = require("mongoose");
const connection_url = "mongodb+srv://newUser:newPassword@cluster0.m5f4ejo.mongodb.net/RecipesDB?retryWrites=true&w=majority";

// gives me message if I don't have this
mongoose.set('strictQuery', true);

mongoose.connect(connection_url)
.then(() => console.log("Successfully connected"))
.catch((error: any) => console.error(`Could not connect due to ${error}`));

app.use(express.json());

// gets all recipes from router for recipes 
app.use("/recipe", recipeRoutes);

app.get('/', (req, res) => {
  res.send('Hello world!')
});

app.listen(3001);

