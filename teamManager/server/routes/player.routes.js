const PlayerController = require('../controllers/player.controller');

module.exports = (app) => {
    app.get('/api', PlayerController.index);
    app.get('/api/players', PlayerController.findAllPlayers);
    app.get('/api/players/:id', PlayerController.findOnePlayerById);
    app.put('/api/players/:id', PlayerController.updatePlayer);
    app.post('/api/players/add', PlayerController.createPlayer);
    app.delete('/api/players/:id', PlayerController.deletePlayer);
}