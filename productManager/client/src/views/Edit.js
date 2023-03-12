import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import { useParams, useNavigate } from 'react-router-dom';
import Main from './Main';


const Edit = (props) => {

    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/products/edit/" + id, {
            title,
            price,
            description
        })
            .then(res => {
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='container'>
            <h1 className='display-2' style={{"textAlign": "center"}}>Update {title}</h1>

            <form className='container-sm my-2' onSubmit={updateProduct}>
                <p>
                    <label htmlFor='title' className='form-label'>Title</label><br />
                    <input className='form-control' type="text" name='title' value={title} placeholder={title} onChange={(e) => setTitle(e.target.value)} />
                </p>
                <p>
                    <label className='form-label' htmlFor='price'>Price</label><br />
                    <input className='form-control' name='price' type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </p>
                <p>
                    <label className='form-label' htmlFor='description'>Description</label><br />
                    <input className='form-control' name='description' type="text" value={description} placeholder={description} onChange={(e) => setDescription(e.target.value)} />
                </p>
                <div className='text-center'>
                    <button className='btn btn-primary' type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Edit