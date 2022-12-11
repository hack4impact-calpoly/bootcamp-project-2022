import {Express, Router} from "express";
import recipeRouter from "./routes/routes"

const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  next();
});


app.use(express.json());
const router: Router = express.Router(); 



import mongoose from "mongoose";
const connection_url = "mongodb+srv://RadioEd:newPassword@cluster0.tnpzvh4.mongodb.net/RecipesDB?retryWrites=true&w=majority"

//establish moongoose connection
mongoose.connect(connection_url)
.then(() => console.log("Successfully connected to db"))
//.catch((err) => console.log('Could not connect due to DB: ${err}'));



app.use("/", recipeRouter)


app.listen(3001);