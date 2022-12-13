import { Express } from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe";


const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
console.log("Backend running");




mongoose.set('strictQuery', true);
const connect_url = "mongodb+srv://admin:password123!@milestone4-cluster.4somsb0.mongodb.net/RecipesDB?retryWrites=true&w=majority"
mongoose.connect(connect_url)
.then(() => console.log("success"))
.catch((err) => console.log(`failure ${err}`)); 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    next();
});
app.use(express.json()); //so express knows request body will be in jsons

app.use("/recipe", recipeRouter);

app.listen(3001);
