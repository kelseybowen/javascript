import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {

    const { products, setProducts } = props;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

    const deleteProduct = (productId) => {
        axios.delete("http://localhost:8000/api/products/" + productId)
            .then(res => {
                removeFromDom(productId);
                navigate("/");
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container col-6 my-5">
            <h2 className='display-5' style={{ "textAlign": "center" }}>All Products:</h2>
            {
                products.map((product, idx) => {
                    return (
                        <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "space-evenly" }}>
                            <h3 className='col-4' key={idx}><Link to={`/${product._id}`} >{product.title}</Link></h3>
                            <button className='btn btn-outline-primary'><Link to={`/edit/${product._id}`}>Edit</Link></button>
                            <button className='btn btn-outline-primary' onClick={(e) => (deleteProduct(product._id))}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList;