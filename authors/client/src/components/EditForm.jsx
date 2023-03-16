import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditForm = (props) => {

    const [errors, setErrors] = useState("");
    const [author, setAuthor] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data);
            })
    }, [])

    const formValidator = () => {
        let isValid = true;
        if (author.length < 3) {
            return false;
        }
        return isValid;
    }

    const updateAuthor = (e) => {
        e.preventDefault();
        if (formValidator()) {
            axios.put('http://localhost:8000/api/authors/' + id, { name: e.target.name.value })
                .then(res => {
                    navigate("/")
                })
                .catch(err => console.log(err))
        }
        else {
            setErrors("Name must be at least 3 characters.")
        }
    }
    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={`/`}>Home</Link>
            <h4>Update author:</h4>
            {errors ? <p className='text-danger'>{errors}</p> : null}
            <form className="form" onSubmit={updateAuthor}>
                <label htmlFor="name" className="form-label">Name: </label>
                <input type="text" className="form-control" name='name' defaultValue={author.name} onChange={(e) => {setAuthor(e.target.value)}} />
                <div className='text-center my-3'>
                    <Link to={`/`} className="btn btn-outline-primary mx-3">Cancel</Link>
                    <button className="btn btn-outline-primary mx-3">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default EditForm