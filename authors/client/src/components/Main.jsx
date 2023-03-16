import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AuthorList from './AuthorList';

const Main = (props) => {

    const { listOfAllAuthors, setListOfAllAuthors } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setListOfAllAuthors(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div className='mx-5'>
            <h1>Favorite Authors</h1>
            <Link to={`/authors/new`}>Add an author</Link>
            <p>We have quotes by:</p>
            <AuthorList listOfAllAuthors={listOfAllAuthors} setListOfAllAuthors={setListOfAllAuthors} />
        </div>
    )
}

export default Main