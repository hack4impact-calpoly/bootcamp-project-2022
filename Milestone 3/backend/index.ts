import {Express} from "express"
import mongoose from "mongoose"
import recipeRouter from "./routes/recipe";

const express = require("express") // 1. includes Express 
const app: Express = express() // 2. initializes Express 
console.log("Backend running")
app.use(express.json());

const url = "mongodb+srv://admin:Password123!@cluster0.8zcta2q.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url)
.then(() => console.log("Connected to MongoDB!"))
.catch((err) => console.log(`Error ${err}`));


app.get("/", (req, res) => {
    res.send("Hello world");
})
app.use("/", recipeRouter);
// Routes go here
app.listen(3001) // 3. runs Express
