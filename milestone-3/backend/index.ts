import { Express, Request, Response, Router} from "express";
import Recipe from "./model";

const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
const mongoose = require ('mongoose')
const connection_url = "mongodb+srv://hihi:hack4impact@cluster0.alx1lb5.mongodb.net/RecipesDB?retryWrites=true&w=majority"
mongoose.connect(connection_url)
    .then(() => console.log('Successfully connected'))
    .catch((error) => console.error(`Could not connect due to ${error}`))
app.use(express.json());
app.get("/recipe", async (req: Request, res: Response) => {
    const recipes = await Recipe.find({})
    res.send(recipes)
  })

app.listen(3001);