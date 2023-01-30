import { Express } from "express";
import recipeRouter from "./routes/recipe"

const express = require("express"); 
const app: Express = express(); 
app.use(express.json());
console.log("Backend running");

const mongoose = require("mongoose");
const url = "mongodb+srv://newUser:newPassword@cluster0.px3dw1j.mongodb.net/RecipesDB?retryWrites=true&w=majority"
mongoose
  .connect(url)
  .then(() => console.log("Successfully connected"))
  .catch((error: any) => 
    console.log(`Could not connect due to ${error}`));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  next();
});

app.get("/", (req, res) =>{
  res.send("Hello World!");
});

app.use("/", recipeRouter); 

app.listen(3001);
