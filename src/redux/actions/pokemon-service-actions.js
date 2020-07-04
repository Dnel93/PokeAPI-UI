import axios from 'axios';

import {
  GET_POKEMON,
  GET_POKEMON__FAILURE,
  GET_POKEMON__SUCCESS,
  GET_POKEMON__ALREADY_EXIST,
  ALERT__CLOSED
} from './types';

export const getPokemon = pokemonReceived => async (dispatch, getState) => {
  try {
    const { pokemonList } = getState().pokemonServiceReducer;

    dispatch({
      type: GET_POKEMON
    });

    const pokemonExist = pokemonList.filter(
      pokemon => pokemon.name === pokemonReceived || pokemon.id === parseInt(pokemonReceived)
    );

    if (pokemonExist.length > 0) {
      dispatch({
        type: GET_POKEMON__ALREADY_EXIST
      });
    } else {
      const serviceCall = await axios.get(
        `http://localhost:5000/v1/${pokemonReceived}`
      );

      dispatch({
        type: GET_POKEMON__SUCCESS,
        payload: serviceCall.data
      });
    }

  } catch (error) {
    console.error(`An error has ocurred: ${error.message}`);
    dispatch({
      type: GET_POKEMON__FAILURE,
      payload: error.message
    });
  }
};

export const closeAlert = () => (dispatch) => {
  dispatch({
    type: ALERT__CLOSED
  });
}