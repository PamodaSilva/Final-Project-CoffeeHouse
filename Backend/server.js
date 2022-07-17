
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());
const bookRoutes = require("./routes/Booking");
app.use(bookRoutes);

const PORT = 3000;
const URL = "mongodb+srv://pamodasilva:<Pamodasilva99>@cluster0.qq786.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(URL)
    .then(() => {
        console.log("Connect")
    })
    .catch ((err) => console.log("DB error",err))
app.listen(PORT, () => {
    console.log("app is runninsdfg on")
})
