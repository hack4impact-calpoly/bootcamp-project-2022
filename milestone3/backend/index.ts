import { Express } from "express";
import router from "./routes/recipe";
const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
const mongoose = require("mongoose");
const connection_url =
  "mongodb+srv://newUser:newPassword@cluster0.g8i3gad.mongodb.net/RecipesDB?retryWrites=true&w=majority";

app.use(express.json());

mongoose
  .connect(connection_url)
  .then(() => console.log("Successfully connected"))
  .catch((error: unknown) =>
    console.error(`Could not connect due to ${error}`)
  );

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/recipe", router);

app.listen(3001);
