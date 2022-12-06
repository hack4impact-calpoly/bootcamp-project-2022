
import { Express } from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe";

const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
console.log("Backend running");
app.use(express.json());

const connection_url = "mongodb+srv://newUser:newPassword@cluster0.qjnpuzs.mongodb.net/RecipesDB?retryWrites=true&w=majority"
mongoose.connect(connection_url)
.then(() => console.log("sucess"))
.catch((err) => console.log(`failure ${err}`));

app.get('/', (req, res) => {
  res.send('Hello world!')
});

app.use("/", recipeRouter);

app.listen(3001);