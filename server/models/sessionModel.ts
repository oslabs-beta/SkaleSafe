const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    cookieId: {type: String, required: true, unique: true},
    createdAt: {type: Date, expires: 14400, default: Date.now}
})

module.exports = mongoose.model('Session', sessionSchema)
