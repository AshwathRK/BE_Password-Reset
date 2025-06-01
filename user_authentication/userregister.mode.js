const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phonemumbers:{
        type: Number,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    securityQuestion:{
        type: Object,
        required: true
    },
    dateofbirth: {
        type: Date,
    },
    gender: {
        type: String,
        required: true,
    },

}, { timestamps: true });
// Create the User model from the schema
const User = mongoose.model('UserDetails', userSchema);
module.exports = User;