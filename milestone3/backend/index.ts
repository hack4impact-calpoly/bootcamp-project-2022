import { Express } from "express";
import recipeRoutes from "./routes/recipe";

const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
const mongoose = require("mongoose");
const connection_url = "mongodb+srv://root:test123@cluster0.5zgrd20.mongodb.net/RecipesDB?retryWrites=true&w=majority"

mongoose.connect(connection_url)
.then(() => console.log("Successfully connected"))
.catch(() => console.log("Could not connect"))


app.use(express.json());
app.use("/recipe", recipeRoutes);

app.get('/', (req, res) => {
  res.send('Hello world!')
});

app.listen(3001);