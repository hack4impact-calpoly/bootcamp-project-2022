import { Express, Request, Response, Router} from "express";
import recipeRouter from "./routes/recipe";

const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE,PUT");
    next();
    });
app.use(express.json());
const mongoose = require ('mongoose')
const connection_url = "mongodb+srv://hihi:hack4impact@cluster0.alx1lb5.mongodb.net/RecipesDB?retryWrites=true&w=majority"
mongoose.connect(connection_url)
    .then(() => console.log('Successfully connected'))
    .catch((error:any) => console.error(`Could not connect due to ${error}`))

app.use(express.json());
app.get('/', (req, res) =>{
    res.send("Hello world!")
});
app.use("/", recipeRouter);

app.listen(3001);