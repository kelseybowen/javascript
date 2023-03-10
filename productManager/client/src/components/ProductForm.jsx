import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const {products, setProducts} = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', { 
            title, 
            price, 
            description 
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                setProducts([...products, res.data]);
            })
            .catch(err => console.log(err))
        setTitle("");
        setPrice("");
        setDescription("");
    }

    return (
        <div className="container">
            <h1 className='display-3 text-center'>Product Manager</h1>
            <form className='container-sm my-2' onSubmit={handleSubmit}>
                <p>
                    <label htmlFor='title' className='form-label'>Title</label><br />
                    <input className='form-control' type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </p>
                <p>
                    <label className='form-label' htmlFor='price'>Price</label><br />
                    <input className='form-control' name='price' type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </p>
                <p>
                    <label className='form-label' htmlFor='desc'>Description</label><br />
                    <input className='form-control' name='desc' type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </p>
                <button className='btn btn-primary d-grid col-4 mx-auto' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ProductForm