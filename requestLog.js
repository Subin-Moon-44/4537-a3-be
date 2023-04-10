const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    endpoint: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('requestLog', schema) 