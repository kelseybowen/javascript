const Author = require('../models/author.model');
const {request,response} = require('express');

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    })
}

module.exports.findAllAuthors = (req, res) => {
    Author.find({})
        .then(allAuthors => {
            res.json(allAuthors);
        })
        .catch(err => {
            console.log(err);
            res.json({message: 'Something went wrong', error: err})
        })
}

module.exports.findOneAuthorById = (req, res) => {
    Author.findById({_id: req.params.id})
        .then(Author => res.json(Author))
        .catch(err => res.json(err));
}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(Author => res.json(Author))
        .catch((err) => res.json({message: 'Something went wrong', error: err}));
}

module.exports.updateAuthor = (req, res) => {
    Author.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.json(err));
}

module.exports.deleteAuthor = (req, res) => {
    Author.findByIdAndDelete(req.params.id)
        .then(confirmedDelete => res.json(confirmedDelete))
        .catch(err => res.json(err))
}