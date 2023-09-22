import React, { useEffect } from 'react';
import axios from 'axios';
import PlayerList from "../components/PlayerList";
import PlayerTabs from '../components/PlayerTabs';
import Header from '../components/Header';

const DashboardView = (props) => {

    const { allPlayers, setAllPlayers } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => setAllPlayers(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
        
        <div className='container' style={{ "backgroundColor": "white" }}>
            <Header allPlayers={allPlayers} setAllPlayers={setAllPlayers} />
            <PlayerList allPlayers={allPlayers} setAllPlayers={setAllPlayers} />


        </div>
    )
}

export default DashboardView