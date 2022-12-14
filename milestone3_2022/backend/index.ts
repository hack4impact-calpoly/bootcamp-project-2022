import { Express } from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe";

const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
console.log("Backend running");
app.use(express.json());

const url = "mongodb+srv://newUser:12345@cluster0.dnzfr2l.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(`Error connecting to DB: ${err}`));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello world!')
});

app.use("/", recipeRouter);

app.listen(3001);