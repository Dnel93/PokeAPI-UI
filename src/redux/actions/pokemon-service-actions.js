import axios from 'axios';

import { GET_POKEMON, GET_POKEMON_FAILURE, GET_POKEMON_SUCCESS } from './types';

export const getPokemon = (pokemonName) => async (dispatch) => {
  try {
    dispatch({
      type: GET_POKEMON
    });

    console.log(pokemonName);
    console.log('All Ive got this far');
    const serviceCall = await axios.get(
      `http://localhost:5000/v1/${pokemonName}`
    );
    console.log(serviceCall);
    dispatch({
      type: GET_POKEMON_SUCCESS,
      payload: serviceCall.data
    });
  } catch (error) {
    console.error(`An error has ocurred: ${error.message}`);
    dispatch({
      type: GET_POKEMON_FAILURE,
      error: error.message
    });
  }
};