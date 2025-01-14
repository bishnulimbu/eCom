require('dotenv').config();
const productRoute = require('./Routes/productRoute')
const express = require('express');
const app = express();
const connection = require('./Config/db');
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connection();

app.listen(process.env.PORT, () => {
  console.log(`server is running at http://localhost:${process.env.PORT}`)
})

app.get('/', (req, res) => {
  res.send("hello from server page.");
})

app.use('/product', productRoute);



