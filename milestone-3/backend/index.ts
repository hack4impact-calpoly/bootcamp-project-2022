import { Express } from "express";
const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
app.use(express.json());

const mongoose = require("mongoose");
const connection_url =
  "mongodb+srv://vi:test123@cluster0.dcxelfe.mongodb.net/RecipesDB?retryWrites=true&w=majority";

mongoose
  .connect(connection_url)
  .then(() => console.log("Successfully connected"))
  .catch((err:any) => console.error(`Could not connect due to ${err}`));

import recipeRoutes from "./routes/recipe";
app.use("/recipe", recipeRoutes);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(3001);
