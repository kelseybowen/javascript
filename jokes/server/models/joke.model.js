const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    question: {
        type: String
    },
    answer: {
        type: String
    },
});

const Joke = mongoose.model('Joke', JokeSchema);
module.exports = Joke;