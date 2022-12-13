import { Express } from "express";
import recipeRoutes from "./routes/recipeRoutes";

const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
app.use(express.json());

const mongoose = require ('mongoose')
const connection_url = "mongodb+srv://newUser:newPassword@cluster0.xi5luwp.mongodb.net/RecipesDB?retryWrites=true&w=majority"

mongoose.connect(connection_url)
.then(() => console.log(`Sucessfully connected`))
.catch((error: any) => console.error(`Could not connect due to ${error}`))

app.get('/', (req, res) => { 
  res.send('Hello world!')
});

app.use("/recipes", recipeRoutes)


app.listen(3001);