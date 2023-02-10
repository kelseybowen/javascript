import React, { useState } from 'react';

const PersonCard = (props) => {

    const {firstName, lastName, initialAge, hairColor} = props;
    const [ageState, setAgeState] = useState(initialAge);
    return (
        <div>
            <h1>{ lastName }, { firstName }</h1>
            <p>Age: { ageState } </p>
            <p>Hair Color: { hairColor }</p>
            <button onClick={(event) => setAgeState(ageState + 1)}>Birthday Button for {firstName} {lastName}</button>
        </div>
    )
}

export default PersonCard;