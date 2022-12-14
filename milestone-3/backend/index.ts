import { Express } from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe";

const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
console.log("Backend running");
app.use(express.json());

const cors = require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

const url = "mongodb+srv://admin:password123.@cluster0.3m5bgfq.mongodb.net/RecipesDB?retryWrites=true&w=majority";
mongoose.connect(url)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(`Error connecting to DB: ${err}`));

app.get('/', (req, res) => {
  res.send('Hello world!')
});

app.use("/", recipeRouter);

app.listen(3001);