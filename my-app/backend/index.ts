import { Express,Request,Response,Router } from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe";
const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  next();
});
const connection_url = "mongodb+srv://newUser:newPassword@cluster0.qvokmza.mongodb.net/RecipesDB?retryWrites=true&w=majority";

mongoose.connect(connection_url)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(`Error connecting to DB: ${err}`));


app.use(express.json());

app.use("/",recipeRouter);

app.get('/hey', (req, res) => {
  res.send('hey')
});

// app.get("/recipe", async (req: Request, res: Response) => {
//   const recipes = await Recipe.find({})
//   res.send(recipes)
// });

app.listen(3002);
console.log("LISTENING");