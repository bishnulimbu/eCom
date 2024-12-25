const express = require('express');
const app = express();

require('dotenv').config();

app.listen(process.env.PORT, () => {
  console.log(`server is running at http://localhost:${process.env.PORT}`)
})

app.get('/', (req, res) => {
  res.send("hello from server page.");
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');
