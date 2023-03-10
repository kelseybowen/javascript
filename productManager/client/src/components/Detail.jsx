import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Detail = (props) => {

    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='container text-center my-5'>
            <div className="card">
                <h5 className='display-3'>{product.title}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Description: {product.description}</p>
            </div>
        </div>
    )
}

export default Detail