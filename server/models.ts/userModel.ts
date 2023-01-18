import { ErrorRequestHandler } from "express";

const mongoose = require('mongoose');
const { DB_URI } = process.env;

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    dbName: 'SkaleSafe'
})
.then(() => console.log('Connected to MongoDB Database'))
.catch((err: ErrorRequestHandler) => {
    console.error('Error connecting to MongoDB Database');
})
