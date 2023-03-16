import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const NewForm = (props) => {

    const [errors, setErrors] = useState("");
    const [author, setAuthor] = useState("");
    const navigate = useNavigate();

    const formValidator = () => {
        let isValid = true;
        if (author.length < 3) {
            return false;
        }
        return isValid;
    }

    const createAuthor = (e) => {
        e.preventDefault();
        if (formValidator()) {
            axios.post('http://localhost:8000/api/authors', { name: author })
                .then(res => {
                    console.log(res)
                    navigate("/")
                })
                .catch(err => console.log(err))
        }
        else {
            setErrors("Name must be at least 3 characters.");
        }
    }

    return (
        <div className='mx-5'>
            <h1>Favorite Authors</h1>
            <Link to={`/`}>Home</Link>
            <h4>Add a new author:</h4>

            {errors ? <p className='text-danger'>{errors}</p> : null}
            <form className="form" onSubmit={createAuthor}>
                <label htmlFor='name' className="form-label">Name: </label>
                <input type="text" className="form-control" name='name' onChange={(e) => setAuthor(e.target.value)} />
                <div className='text-center my-3'>
                    <Link to={`/`} className="btn btn-outline-primary mx-3">Cancel</Link>
                    <button className="btn btn-outline-primary mx-3">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default NewForm

