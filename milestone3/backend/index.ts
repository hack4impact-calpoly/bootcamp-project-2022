import { Express } from "express";
import recipeRouter from "./routes/recipe";
const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
const mongoose = require("mongoose");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE,PUT");
  next();
});

app.use(express.json());

const connection_url =
  "mongodb+srv://newUser:newPassword@cluster0.g8i3gad.mongodb.net/RecipesDB?retryWrites=true&w=majority";

mongoose
  .connect(connection_url)
  .then(() => console.log("Successfully connected"))
  .catch((error: unknown) =>
    console.error(`Could not connect due to ${error}`)
  );

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/recipe", recipeRouter);

app.listen(3001);
