import { Express } from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe";

const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
app.use(express.json());
console.log("Backend Running");

const url = "mongodb+srv://userDB:bootcamp123@recipedb.0okbfkt.mongodb.net/RecipeDB?retryWrites=true&w=majority"
mongoose.connect(url)
.then(() => console.log("Connected to MongooseDB"))
.catch((err) => console.log(`Error connecting to DB: ${err}`))

app.get('/', (req, res) => {
  res.send('Hello world!')
});

app.use("/", recipeRouter);

app.listen(3001);