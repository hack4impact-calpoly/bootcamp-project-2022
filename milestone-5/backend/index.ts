import { Express } from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe";
const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
app.use(express.json());
const url = "mongodb+srv://milestoneUser:milestoneUserPassword@ryansrecipes.icu1ufj.mongodb.net/RecipesDB?retryWrites=true&w=majority"
mongoose.connect(url)
.then(() => "Connected to MongoDB");

app.get('/', (req, res) => {
  res.send('Hello world!')
});
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  next();
});

app.use("/", recipeRouter);


app.listen(3001);