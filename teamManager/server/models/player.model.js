const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [3, "Name must be at least 3 characters long!"]
    },
    preferredPosition: {
        type: String
    },
    gameStatus: {
        1: {
            type: String,
            enum: ["Undecided", "Playing", "Not Playing"],
            default: "Undecided"
        },
        2: {
            type: String,
            enum: ["Undecided", "Playing", "Not Playing"],
            default: "Undecided"
        },
        3: {
            type: String,
            enum: ["Undecided", "Playing", "Not Playing"],
            default: "Undecided"
        },
    },
    // gameOneStatus: {
    //     type: String,
    //     enum: ["Undecided", "Playing", "Not Playing"],
    //     default: "Undecided"
    // },
    // gameTwoStatus: {
    //     type: String,
    //     enum: ["Undecided", "Playing", "Not Playing"],
    //     default: "Undecided"
    // },
    // gameThreeStatus: {
    //     type: String,
    //     enum: ["Undecided", "Playing", "Not Playing"],
    //     default: "Undecided"
    // },
},
    { timestamps: true });

const Player = mongoose.model('Player', PlayerSchema);
module.exports = Player;