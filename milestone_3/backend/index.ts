import { Express } from "express";
import recipeRouter from "./routes/recipe";
const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
app.use(express.json());
const mongoose = require("mongoose")
const connection_url = "mongodb+srv://newUser:newPassword@cluster0.8vodscu.mongodb.net/RecipesDB?retryWrites=true&w=majority"

mongoose.connect(connection_url)
.then(() => console.log("Succesfully Connected"))
.catch((error: any) => console.error(`Could not connect due to ${error}`))


app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/", recipeRouter)

app.listen(3001);
