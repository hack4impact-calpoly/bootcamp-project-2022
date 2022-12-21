import express, { Express } from "express";
const app: Express = express(); // 2. initializes Express
const mongoose = require('mongoose')
const connection_url = "mongodb+srv://ryan:newPassword@cluster0.hzbf3h2.mongodb.net/RecipesDB?retryWrites=true&w=majority"
app.use(express.json());

mongoose.connect(connection_url)
.then(() => console.log("Successful Connection"))
.catch((error: any) => console.log(`Could not connect due to ${error}`))

app.get('/', (req, res) => {
  res.send('Hello world!!')
});

app.listen(3001);
export default app;

