import { Express, Request, Response } from "express";
import Recipe from "./models/schema";

const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
const mongoose = require("mongoose");
const connection_url = "mongodb+srv://MongoDBDamonTest:LSPL5ro4bZ6xzCmw@cluster0.dr7eu1j.mongodb.net/RecipesDB?retryWrites=true&w=majority"
app.use(express.json());

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

app.get("/recipe/:type", async (req: Request, res: Response) => {
    const recipes = await Recipe.find({"type": req.params.type});
    res.send(recipes);
});

app.post("/recipe", async (req: Request, res: Response) => {
    await Recipe.create(req.body);
    res.send(200)
});

app.put("/recipe/:type/ingredient", async (req: Request, res: Response) => {
    const type = req.params.type;
    const ingredient = req.body.ingredient;
    await Recipe.findOneAndUpdate({"type": type}, { $push: {ingredients: ingredient }});
    res.send(200)
});

app.put("/recipe/:type/instruction", async (req: Request, res: Response) => {
    const type = req.params.type;
    const instruction = req.body.instruction;
    await Recipe.findOneAndUpdate({"type": type}, { $push: {instructions: instruction }});
    res.send(200)
});

app.listen(3001);
