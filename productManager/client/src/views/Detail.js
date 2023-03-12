import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const Detail = (props) => {

    const { products, setProducts } = props;
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    console.log(product);
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log(res);
                setProduct(res.data);
            })
            .catch(err => console.log(err));
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
        <div className='container text-center my-5'>
            <div className="card py-5">
                <h5 className='display-3'>{product.title}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Description: {product.description}</p>
                <div>
                    <button className='btn btn-outline-primary'><Link to={`/edit/${product._id}`}>Edit</Link></button>

                    <button className='btn btn-danger mx-3' value={id} onClick={(e) => deleteProduct(id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Detail