import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const GameStatusSelect = (props) => {

    const { player, gameStatus, gameNum } = props;
    let statusOpt = ["Undecided", "Playing", "Not Playing"];
    const statusRef = useRef([]);

    useEffect(() => {
        statusRef.current = statusOpt.filter(opt => opt !== gameStatus);
    })

    // make axios call to change status
    const updatePlayerStatus = (e, playerId) => {
        // e.preventDefault();
        let data = {
            "gameStatus" : {
                gameNum: e.target.value
            }
        }
        axios.put('http://localhost:8000/api/players/' + playerId, data)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }


    return (
        <div className='dropdown'>
            <select >
                <option value={gameStatus} onChange={(e) => updatePlayerStatus(player._id)}>{gameStatus}</option>
                <option value={statusRef.current[0]} onChange={(e) => updatePlayerStatus(player._id)}>{statusRef.current[0]}</option>
                <option value={statusRef.current[1]} onChange={(e) => updatePlayerStatus(player._id)}>{statusRef.current[1]}</option>
            </select>
        </div>
    )
}

export default GameStatusSelect