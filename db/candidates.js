// const Candidates = [];

const mongoose = require('mongoose')

// Setup Schema
const candidatesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    skills: {
        type: Array,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

// Export Candidates Model
module.exports = mongoose.model('Candidates', candidatesSchema)