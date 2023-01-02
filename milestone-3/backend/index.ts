import { Express } from "express";
const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
app.use(express.json()); //allows us to interpret the body of any request

// listens for a GET request to be made to the / path.
// It then executes a function that takes in a request and a response parameter
app.get('/', (req, res) => { 
  res.send('Hello world!') // response to request
});

app.listen(3001);
