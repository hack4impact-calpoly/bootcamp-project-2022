import { Express } from 'express';
import mongoose from 'mongoose';
import recipeRouter from './routes/recipe';

const express = require('express'); // 1. includes Express
const app: Express = express(); // 2. initializes Express

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  next();
});

app.use(express.json());
console.log('Backend running');

const url =
  'mongodb+srv://newUser:newPassword@cluster0.ui4ekqu.mongodb.net/RecipesDB?retryWrites=true&w=majority';
mongoose
  .connect(url)
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.log(`Error connecting to DB: ${err}`));

app.get('/', (req, res) => {
  res.send('Hello World,');
});

app.use('/recipe', recipeRouter);

// Routes go here
app.listen(3001); // 3. runs Express
