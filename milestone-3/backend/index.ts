import { Express } from "express";
const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
const mongoose = require('mongoose')
const connection_url = "mongodb+srv://bootcampuser:bootcampdata22@cluster0.epfcxku.mongodb.net/RecipesDB?retryWrites=true&w=majority"

mongoose.connect(connection_url)
.then(() => console.log('Successfully connected'))
.catch(() => console.log(`Could not connect`))

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world!')
});

app.listen(3001);