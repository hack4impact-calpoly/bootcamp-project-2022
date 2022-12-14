import {Express} from "express"
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe"



const express = require("express")
const app: Express = express()

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    next();
  });
app.use(express.json())
console.log("Backend running")

const url = "mongodb+srv://admin:password123!@cluster0.ecs5re9.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url)
.then(()=> console.log("Connected to MongoDB!"))
.catch((err)=> console.log(`Error connecting to DB: ${err}`))

//ROUTES GO HERE
app.use("/", recipeRouter)


app.listen(3001)


