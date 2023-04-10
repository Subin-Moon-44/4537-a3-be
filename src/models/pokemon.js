const mongoose = require('mongoose');
const axios = require('axios');
const typeApi = "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/types.json";


const pokemonSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: {
        english: { type: String, required: true, maxlength: 20 },
        japanese: { type: String },
        chinese: { type: String },
        french: { type: String },
    },
    type: { type: [String], enum: [] },
    base: {
        HP: { type: Number, min: 0 },
        Attack: { type: Number, min: 0 },
        Defense: { type: Number, min: 0 },
        'Sp. Attack': { type: Number, min: 0 },
        'Sp. Defense': { type: Number, min: 0 },
        Speed: { type: Number, min: 0 },
    }
});

axios.get(typeApi)
    .then(res => {
        const types = res.data.map(typeData => typeData.english);
        pokemonSchema.path('type').enum = types;
    })
    .catch(err => {
        console.log(err);
    });

const Pokemon = mongoose.model('pokemons', pokemonSchema);
module.exports = Pokemon;