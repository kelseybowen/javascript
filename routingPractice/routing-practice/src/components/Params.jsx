import React from 'react'
import { useParams } from 'react-router-dom';

const Params = () => {

    const {word, color1, color2} = useParams();

    return (
        <div>
            <h1 style={color1 ? {color: color1, backgroundColor: color2} : null}>
            {
                isNaN(word) ? `The word is: ${word}` : `The number is: ${word}`
            }
            </h1>
        </div>
    )
}

export default Params