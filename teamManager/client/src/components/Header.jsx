import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className='p-4'>
            <h1 className='display-1 text-center'>Team Manager</h1>
            <div className='d-flex justify-content-end'>
                <button className="btn btn-warning"><Link to={"/api/players/add"} id='add' style={{"textDecoration": "none", "color": "black"}}>Add Player</Link></button>
            </div>
        </div>
    )
}

export default Header