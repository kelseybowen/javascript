const Player = require('../models/player.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    })
}

module.exports.findAllPlayers = (req, res) => {
    Player.find({})
        .then(allPlayers => res.json(allPlayers))
        .catch(err => res.json(err))
}

module.exports.findOnePlayerById = (req, res) => {
    Player.findById({_id: req.params.id})
        .then(player => res.json(player))
        .catch(err => res.json(err))
}

module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
        .then(Player => res.json(Player))
        .catch(err => res.json(err))
}

module.exports.updatePlayer = (req, res) => {
    Player.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedPlayer => res.json(updatedPlayer))
        .catch(err => res.json(err))
}

module.exports.deletePlayer = (req, res) => {
    Player.findByIdAndDelete(req.params.id)
        .then(confirmedDelete => res.json(confirmedDelete))
        .catch(err => res.json(err))
}