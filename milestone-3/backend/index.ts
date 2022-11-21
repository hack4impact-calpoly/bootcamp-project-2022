import { Express } from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe";
const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express


//const mongoose = require('mongoose');
const connection_url = "mongodb+srv://parshana:toast1234@cluster0.vggi0iz.mongodb.net/RecipesDB?retryWrites=true&w=majority"


mongoose.connect(connection_url)
.then(() => console.log('Sucessfully Connected'))
.catch((error:any) => console.error(`Could not connect due to ${error}`))

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world!')
});

app.use("/", recipeRouter);

app.listen(3001);