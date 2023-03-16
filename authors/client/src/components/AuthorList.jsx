import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthorList = (props) => {

    const { listOfAllAuthors, setListOfAllAuthors } = props;
    const navigate = useNavigate();

    const navToEdit = (authorId) => {
        navigate(`/authors/${authorId}`)
    }

    const removeFromDom = authorId => {
        setListOfAllAuthors(listOfAllAuthors.filter(author => author._id !== authorId));
    }

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then((res) => {
                removeFromDom(authorId)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th className='mx-2'>Author</th>
                        <th className='mx-2'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listOfAllAuthors.map((author) => (
                            <tr key={author._id}>
                                <td>{author.name}</td>
                                <td>
                                    <button className="btn btn-outline-primary mx-2" onClick={(e) => navToEdit(author._id)}>Edit</button>
                                    <button className="btn btn-outline-primary" onClick={(e) => {deleteAuthor(author._id)}}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList