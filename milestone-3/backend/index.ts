import { Express, Request, Response } from "express";
import Recipe from "./models/schema";

const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
const mongoose = require("mongoose");
const connection_url = "mongodb+srv://MongoDBDamonTest:LSPL5ro4bZ6xzCmw@cluster0.dr7eu1j.mongodb.net/RecipesDB?retryWrites=true&w=majority"
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    res.header("Content-type", "application/json");
    next();
});

mongoose.connect(connection_url)
    .then(() => console.log("Successfully connected"))
    .catch((error: any) => console.error(`Could not connect due to ${error}`));

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get("/recipe", async (req: Request, res: Response) => {;
    const recipes = await Recipe.find({});
    res.send(recipes);
});

app.get("/recipe/:name", async (req: Request, res: Response) => {
    const recipes = await Recipe.find({"name": req.params.name});
    res.send(recipes);
});

app.post("/recipe", async (req: Request, res: Response) => {
    await Recipe.create(req.body);
    res.send(200)
});

app.put("/recipe/:name/ingredient", async (req: Request, res: Response) => {
    const name = req.params.name;
    const ingredient = req.body.ingredient;
    await Recipe.findOneAndUpdate({"name": name}, { $push: {ingredients: ingredient }});
    res.send(200)
});

app.put("/recipe/:name/instruction", async (req: Request, res: Response) => {
    const name = req.params.name;
    const instruction = req.body.instruction;
    const position = req.body.position as number;
    await Recipe.findOneAndUpdate({"name": name}, { $push:
        {
            instructions: {
                $each: [instruction],
                $position: position - 1
            }
        }
    
    });
    res.send(200)
});

app.listen(3001);
