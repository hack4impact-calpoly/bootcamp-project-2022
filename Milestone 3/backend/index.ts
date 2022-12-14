import {Express} from "express"
import recipeRouter from "./routes/recipe";
import { Recipe } from "./models/recipeSchema"
const mongoose = require("mongoose")
const express = require("express") // 1. includes Express 
const app: Express = express() // 2. initializes Express 

console.log("Backend running")
app.use(express.json());

const url = "mongodb+srv://admin:Password123!@cluster0.8zcta2q.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url)
.then(() => console.log("Connected to MongoDB!"))
.catch((err) => console.log(`Error: ${err}`));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    next();
});

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.use("/", recipeRouter);
// Routes go here
app.listen(3001) // 3. runs Express
