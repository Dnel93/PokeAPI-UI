import {
  GET_POKEMON,
  GET_POKEMON__FAILURE,
  GET_POKEMON__SUCCESS,
  GET_POKEMON__ALREADY_EXIST
} from '../actions/types';

const initialState = {
  pokemonList: [],
  isLoading: false,
  error: ''
};

const pokemonServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        isLoading: true
      };
    case GET_POKEMON__FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case GET_POKEMON__SUCCESS:
      return {
        ...state,
        pokemonList: [...state.pokemonList, action.payload],
        error: '',
        isLoading: false
      };
    case GET_POKEMON__ALREADY_EXIST:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default pokemonServiceReducer;
