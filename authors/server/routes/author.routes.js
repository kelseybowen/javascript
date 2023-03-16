const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.get('/api', AuthorController.index);
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.get('/api/authors/:id', AuthorController.findOneAuthorById);
    app.post('/api/authors', AuthorController.createAuthor);
    app.put('/api/authors/:id', AuthorController.updateAuthor)
    app.delete('/api/authors/:id', AuthorController.deleteAuthor)
}