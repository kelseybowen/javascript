import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import PlayerTabs from './PlayerTabs';

const AddPlayer = () => {

    const [playerName, setPlayerName] = useState("");
    const [playerPreferredPosition, setPlayerPreferredPosition] = useState("");
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();

    const formValidator = () => {
        let isValid = true;
        if (playerName.length < 2) {
            setErrors("Name must be at least 2 characters!")
            isValid = false;
        }
        return isValid;
    }

    const createPlayer = (e) => {
        e.preventDefault();
        if (formValidator()) {
            axios.post('http://localhost:8000/api/players/add', { name: playerName, preferredPosition: playerPreferredPosition })
                .then(res => {
                    console.log(res)
                    navigate("/api/players")
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className='container' style={{ "backgroundColor": "white" }}>
            <PlayerTabs/>
            {/* <ul className="nav nav-tabs">
                <li className="nav-item active mx-3">
                    <Link to={"/api/players"} className="nav-link" value='list' id='list' onClick={() => changeActiveTab("list")}>List</Link>
                </li>
                <li className="nav-item mx-3">
                    <Link to={"/api/players/add"} className="nav-link" value='add' id='add' onClick={() => changeActiveTab("add")}>Add Player</Link>
                </li>
            </ul> */}
            <div className="container">

                <form className="form-group" onSubmit={createPlayer} style={{ "padding": "20px" }}>
                    <h3>Add Player</h3>
                    <p className="text-danger">{errors}</p>
                    <label className='form-label' htmlFor="name">Player Name: </label>
                    <input type="text" name="name" className="form-control" onChange={(e) => setPlayerName(e.target.value)} />

                    <label className='form-label' htmlFor="preferredPosition">Preferred Position: </label>
                    <input type="text" name="preferredPosition" className="form-control" onChange={(e) => setPlayerPreferredPosition(e.target.value)} />
                    <button className="btn btn-success mt-3">Add Player</button>
                </form>
            </div>
        </div>
    )
}

export default AddPlayer