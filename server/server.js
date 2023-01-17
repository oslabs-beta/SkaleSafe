const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config(); // <<< IS THIS NECESSARY?
const process = require('process');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// REQUIRE IN LOCAL FILES HERE
const PORT = process.env.PORT // IN .env, PORT IS SET TO 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true })); // <<< IS 'true' HERE NECESSARY?
app.use(cors());
app.use(cookieParser());

// TEST ROUTE TO CHECK FUNCTIONALITY
app.get('/', (req, res) => {
    res.status(200).json('GET requrest received');
})






app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`)
});
