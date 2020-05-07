import {ADD_POKEMON, SEARCH_POKEMON} from '../actions/pokemon-service-actions';

const initialState = {
    pokemonList: [
        {name: "Pikachu"}
    ]
};

const pokemonServiceReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_POKEMON:
            return {
                ...state,
                pokemonList: [...state.pokemonList,  action.pokemon]
            };
        case SEARCH_POKEMON:
        default:
            return state;
    }
}

export default pokemonServiceReducer;