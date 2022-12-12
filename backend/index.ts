import { Express } from "express";
import mongoose from "mongoose";
import recipeRoutes from "./routes/recipe";
const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
app.use(express.json()); // Enables JSON parsing

const connection_url =
  "mongodb+srv://newUser:newPassword@cluster0.mxdmxif.mongodb.net/RecipesDB?retryWrites=true&w=majority";

mongoose
  .connect(connection_url)
  .then(() => console.log("Successfully Connected to MongoDB"))
  .catch((error: any) => console.error(`Could not connect due to ${error}`));

app.use("/recipe", recipeRoutes);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(3001);

// Express takes in a request and then executes the proper code.
