import axios from 'axios';

export const getPokemon = (pokemonName) => {
  return axios
    .get(`http://localhost:5000/v1/${pokemonName}`)
    .then(pokemon => {
      return { ...pokemon.data };
    })
    .catch(() => {
      console.log("Couldn't retrieve pokemon");
    });
}
