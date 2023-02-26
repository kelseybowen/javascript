import React, {useState, useEffect} from 'react'

const Pokemon = () => {

    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, []);
 
    return (
        <div>
            {
                pokemon.map((p, i) => {
                    return <p key={i}>{p.name}</p>
                })
            }
        </div>
    );
}

export default Pokemon