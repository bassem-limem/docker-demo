const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    hp: {
        required: true,
        type: Number
    },
    cp: {
        required: true,
        type: Number
    },
    picture: {
        required: true,
        type: String
    },
    types: {
        required: true,
        type: Array
    },
})

module.exports = mongoose.model('pokemons', dataSchema)