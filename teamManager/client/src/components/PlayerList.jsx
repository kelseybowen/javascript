import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import AddPlayer from './AddPlayer';
import GameStatusSelect from './GameStatusSelect';

const PlayerList = (props) => {

    const { allPlayers, setAllPlayers } = props;

    const deletePlayer = (playerId) => {
        axios.delete('http://localhost:8000/api/players/' + playerId)
            .then(res => {
                removeFromDom(playerId)
            })
    }

    const removeFromDom = playerId => {
        setAllPlayers(allPlayers.filter(player => player._id !== playerId))
    }

    return (
        <div className='container'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope='col'>Player Name</th>
                        <th scope='col'>Preferred Position</th>
                        <th scope='col'>Game 1</th>
                        <th scope='col'>Game 2</th>
                        <th scope='col'>Game 3</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allPlayers.map((player) => (
                            <tr key={player._id}>
                                <td><Link to={`/api/players/${player._id}`}>{player.name}</Link></td>
                                <td>{player.preferredPosition}</td>
                                <td>
                                    <GameStatusSelect player={player} gameStatus={player.gameStatus[1]} gameNum={1} />
                                </td>
                                <td>
                                    {/* <button className='btn' id={`game2-${player.id}`}>{player.gameTwoStatus}</button> */}
                                </td>
                                <td>
                                    {/* <button className='btn' id={`game3-${player.id}`}>{player.gameTwoStatus}</button> */}
                                </td>
                                <td>
                                    <button onClick={(e) => deletePlayer(player._id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PlayerList