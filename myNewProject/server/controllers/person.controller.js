const Person = require('../models/person.model'); 
const {request,response} = require('express');

module.exports.index = (request, response) => { 
    response.json({
        message: "Hello World"
    });
}

module.exports.createPerson = (request, response) => {
    Person.create(request.body)
        .then(person => response.json(person))
        .catch((err) => response.json({ message: 'Something went wrong', error: err }));
}

module.exports.findAllPeople = (request, response) => {
    Person.find({})
        .then((allPeople) => {
            response.json(allPeople)
        })
        .catch((err) => {
            response.json({message: 'Something went wrong', error: err})
        });
}
