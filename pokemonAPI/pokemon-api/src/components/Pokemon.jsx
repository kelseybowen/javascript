import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Pokemon = () => {

    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(response => {setResponseData(response.data.results)})
    }, []);

    return (
        <div>
            {
                responseData.map((p, i) => {
                    return <p key={i}>{p.name}</p>
                })
            }
        </div>
    );
}

export default Pokemon