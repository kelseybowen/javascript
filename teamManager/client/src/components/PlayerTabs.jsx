import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PlayerTabs = () => {

    // const [activeTab, setActiveTab] = useState("list");

    // useEffect(() => {
    //     document.getElementById(activeTab).classList.add("active");
    // }, [])

    // const changeActiveTab = (tab) => {
    //     setActiveTab(tab);
    //     document.getElementById(tab).classList.add("active");
    //     if (tab === "list") {
    //         document.getElementById("add").classList.remove("active");
    //     } else {
    //         document.getElementById("list").classList.remove("active");
    //     }
    // }

    return (
        <div className='p-3'>
            <Link to={"/api/players/add"} className="btn btn-warning" id='add'>Add Player</Link>
        </div>
    )
}

export default PlayerTabs