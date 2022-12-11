import { Express } from "express";
import recipeEndpoints from "./routes/recipe";


const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
const mongoose = require('mongoose')
const connection_url = "mongodb+srv://newUser:newPassword@cluster0.mncyr5p.mongodb.net/RecipesDB?retryWrites=true&w=majority"

mongoose.connect(connection_url)
.then(() => console.log('Successfully connected'))
.catch((error: any) => console.error(`Could not connect due to ${error}`))


app.use(express.json());
app.use("/recipe", recipeEndpoints)

// app.get('/', (req, res) => {
//   res.send('Hello world!')
// });

app.listen(3001);