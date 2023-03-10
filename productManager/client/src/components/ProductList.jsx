import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {

    const { products, setProducts } = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <div className="container text-center my-5">
            <h2 className='display-5'>All Products:</h2>
            {
                products.map((product, idx) => {
                    return (
                        <h3 key={idx}><Link to={`/${product._id}`} >{product.title}</Link></h3>
                    )
                })
            }
        </div>
    )
}

export default ProductList