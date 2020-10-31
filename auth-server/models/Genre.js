const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const GenreSchema = new Schema({
    genre: {
        type: Array,
        required: false,
    }
});

module.exports = mongoose.model('Genre', GenreSchema) // Artist => equivalent: collection "artists" in MongoDB