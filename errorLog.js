const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    endpoint: {
        type: String,
        required: true,
    },
    errorStatus: {
        type: Number,
        required: true,
    },
    errorMessage: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('errorLog', schema) 