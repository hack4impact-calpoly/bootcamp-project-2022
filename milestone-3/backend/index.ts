import { Express } from "express";
import recipeRoutes from "./routes/recipeRoutes";

const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
app.use(express.json()); //allows us to interpret the body of any request

const mongoose = require("mongoose")
const connection_url = "mongodb+srv://newUser:elpasswordo@recipescluster.lhzoevj.mongodb.net/RecipesDB?retryWrites=true&w=majority"

mongoose.connect(connection_url)
.then(()=> console.log("Successfully connected"))
.catch((error) => console.error(`Could not connect due to ${error}`))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  next();
});

// listens for a GET request to be made to the / path.
// It then executes a function that takes in a request and a response parameter
app.get('/', (req, res) => { 
  res.send('Hello world!') // response to request
});

app.listen(3001);
