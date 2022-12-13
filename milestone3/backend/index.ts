import {Express} from "express";
const express =  require("express");
const app: Express = express();
app.use(express.json());

import recipeRouter from "./routes/recipe";

const mongoose = require("mongoose");
const connection_url = "mongodb+srv://ddavid01:Dom251rocks@cluster0.wyiqo2g.mongodb.net/RecipesDB?retryWrites=true&w=majority"
mongoose.connect(connection_url)
.then(() => console.log("Successfully connected"))
.catch((error: Error)=> console.error("Could not connect due to ${error}"));

app.get('/', (req, res) => {
  res.send('Hello world!')
});

app.use("/", recipeRouter);

app.listen(3001);