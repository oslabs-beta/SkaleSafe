const mongoose = require('mongoose');
// import mongoose from 'mongoose';
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'SkaleSafe1'
}
// Create an async function that will connect to the database.
const connectDB = async (): Promise<void> => {
    // use the try catch method to connect to the database
    try {
        const URI = process.env.MONGO_URI as string;
        const connect = await mongoose.connect(URI, options);
        console.log('Connected to the DB');
    } catch(err) {
        //if the try does not connect, then it's going to hit the catch and 
        //respond with the err code and exit.
        console.log(err);
        process.exit(-1);
    }
}

export default connectDB;
