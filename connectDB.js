const { mongoose } = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async (input) => {
    try {
        const db = await mongoose.connect(process.env.DB_STRING);
        console.log("Connected to db");
        await mongoose.connection.db.dropCollection('pokemons');
    } catch (err) {
        console.log("ERROR: Database not connected");
        console.log(err);
    }
}

module.exports = { connectDB };