import { ErrorRequestHandler, NextFunction } from "express";

const mongoose = require('mongoose');
const { DB_URI } = process.env;

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    dbName: 'SkaleSafe1'
})
.then(() => console.log('Connected to MongoDB Database'))
.catch((err: ErrorRequestHandler) => {
    console.error(`Error connecting to MongoDB Database: ${err}`);
})

const Schema = mongoose.Schema;
const { SALT_WORK_FACTOR } = process.env;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    email: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// userSchema.pre('save', function(next: NextFunction) {
//     if(this.isNew || this.isModified('password')) {
//         bcrypt
//             .hash(this.password, SALT_WORK_FACTOR)
//             .then((hash: any) => {
//                 this.password = hash;
//                 return next();
//             })
//             .catch((err: ErrorRequestHandler) => {
//                 return next(`Error in hash: ${err}`)
//             })
//     }
// })

module.exports = mongoose.model('User', userSchema);
