import { Express } from "express";
import mongoose from "mongoose";

const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
console.log("Backend running");
app.use(express.json());

const url = "mongodb+srv://admin:password123.@cluster0.3m5bgfq.mongodb.net/RecipesDB?retryWrites=true&w=majority";
mongoose.connect(url)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(`Error connecting to DB: ${err}`));

app.get('/', (req, res) => {
  res.send('Hello world!')
});

app.listen(3001);