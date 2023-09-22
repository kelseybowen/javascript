import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const PlayerDetail = () => {

    

    const { id } = useParams();
    const [onePlayer, setOnePlayer] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/players/${id}`)
            .then(res => {
                setOnePlayer(res.data);
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="container" style={{ "backgroundColor": "white" }}>
            <ul className="nav nav-tabs">
                <li className="nav-item mx-3">
                    <Link to={"/api/players"} className='nav-link'>Back</Link>
                </li>
            </ul>
            <div className='p-5'>

                <div className="card text-center" style={{ "width": "18rem", "margin": "auto" }}>
                    <div className="card-body">
                        <h2 className="card-title">{onePlayer.name}</h2>
                        <h5 className="card-subtitle mb-2 text-muted">{onePlayer.preferredPosition}</h5>
                        <p className="card-text">Game One Status: {onePlayer.gameOneStatus}</p>
                        <p className="card-text">Game Two Status: {onePlayer.gameTwoStatus}</p>
                        <p className="card-text">Game Three Status: {onePlayer.gameThreeStatus}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PlayerDetail