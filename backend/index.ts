
import { Express } from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe";

const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
console.log("Backend running");
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE,PUT");
  next();
  });

const connection_url = "mongodb+srv://newUser:newPassword@cluster0.qjnpuzs.mongodb.net/RecipesDB?retryWrites=true&w=majority"
mongoose.connect(connection_url)
.then(() => console.log("sucess"))
.catch((err) => console.log(`failure ${err}`));

app.get('/', (req, res) => {
  res.send('Hello world!')
});

app.use("/", recipeRouter);

app.listen(3001);