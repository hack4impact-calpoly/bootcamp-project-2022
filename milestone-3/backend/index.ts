import {Express} from 'express';
const express = require('express');
const app: Express = express();
const mongoose = require('mongoose')
const connection_url='mongodb+srv://newUser:newPassword@recepecluster.xvth0tb.mongodb.net/RecipsesDB?retryWrites=true&w=majority'

mongoose.connect(connection_url)
.then(()=>console.log('Successfully connected'))
.catch((error:any)=>console.error(`Could not coonect due to ${error}`))

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Hello world')
})

app.listen(3001)