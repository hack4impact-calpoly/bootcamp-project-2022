import { Express } from "express"
import mongoose from "mongoose";

const express = require("express");
const app: Express = express();
console.log("Backend running in port 3001");

const url = "mongodb+srv://admin:Password123!@cluster0.wpowvdu.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url)
.then(() => console.log("Connected to MongoDB!"))
.catch((err) => console.log(`Error connecting to DB: ${err}`));

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get()

app.listen(3001);