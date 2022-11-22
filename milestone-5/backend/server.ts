import { Express } from "express";
import mongoose from "mongoose";
import recipeEndPoints from "./routes/recipe";

const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
const cors = require("cors");
app.use(express.json()); // Enables JSON parsing
app.use(cors());

console.log("Backend running");

const url =
  "mongodb+srv://admin:7cKIwO4vYk2zZeSY@cluster0.0b736wr.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(url)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(`Error connecting to DB: ${err}`));

// Routes go here
app.use("/recipe", recipeEndPoints); // 3. adds the recipe endpoints

app.listen(3001); // 4. runs Express
