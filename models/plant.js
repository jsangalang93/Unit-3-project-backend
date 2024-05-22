const mongoose = require('mongoose');

const plantSchema = mongoose.Schema({
    name: String,
    family: String,
    size: String, 
    health: String
})

const Plant = mongoose.model('Plant', plantSchema)

module.exports = Plant;