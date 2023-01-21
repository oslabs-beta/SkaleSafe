import dotenv from 'dotenv';
// import mongoose from 'mongoose';
const mongoose = require('mongoose');
dotenv.config();

const { DB_URI } = process.env;

// const URI = process.env.DB_URI;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'SkaleSafe1'
}
// Create an async function that will connect to the database.
const connectDB = async (): Promise<void> => {
    // use the try catch method to connect to the database
    try {
        const connect = await mongoose.connect(DB_URI, options);
    } catch(err) {
        //if the try does not connect, then it's going to hit the catch and 
        //respond with the err code and exit.
        console.log(err);
        process.exit(-1);
    }
}

export default connectDB;

// mongoose.connect(DB_URI, options);

// const connection = mongoose.connection;



