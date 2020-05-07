import axios from 'axios';

function getPokemon(pokemonName) {
    return axios.get(`http://localhost:5000/v1/Pokemon/${pokemonName}`)
            .then(pokemon => {
                return {...pokemon.data};
            } )
            .catch(() => {
                console.log("Couldn't retrieve pokemon")
            });
}

export {getPokemon};