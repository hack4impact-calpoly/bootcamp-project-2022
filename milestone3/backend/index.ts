import { Express } from "express";
const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
const mongoose = require('mongoose')
const connection_url = "mongodb+srv://newUser0:newPassword0@cluster0.obbto6z.mongodb.net/RecipesDB?retryWrites=true&w=majority"
mongoose.connect(connection_url)
.then(() => console.log('Successfully connected'))
.catch((error) => console.log(`Could not connect due to ${error}`))

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world!')
});

app.listen(3001);

