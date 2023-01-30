const mongoose = require('mongoose');

import { Schema, model } from "mongoose";

const sessionSchema = new Schema({
    cookieId: {type: String, required: true, unique: true},
    createdAt: {type: Date, expires: 14400, default: Date.now}
})

const Session = model('Session', sessionSchema)

module.exports = Session;
