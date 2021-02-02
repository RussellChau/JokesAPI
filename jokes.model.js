const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    "setup": {
        type: String,
        minlength:10
    },
    "punchline": {
        type: String,
        minlength:3
    }
}, {timestamps: true});

module.exports = mongoose.model("Joke", JokeSchema);
