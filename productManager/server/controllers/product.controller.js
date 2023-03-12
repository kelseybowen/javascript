const Product = require('../models/product.model');
const {request,response} = require('express');

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    })
}

module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then(allProducts => {
            res.json(allProducts);
        })
        .catch(err => {
            console.log(err);
            res.json({message: 'Something went wrong', error: err})
        })
}

module.exports.findOneProductById = (req, res) => {
    Product.findById({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch((err) => res.json({message: 'Something went wrong', error: err}));
}

module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err));
}

module.exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(confirmedDelete => res.json(confirmedDelete))
        .catch(err => res.json(err))
}