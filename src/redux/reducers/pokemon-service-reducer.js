import { GET_POKEMON, GET_POKEMON_FAILURE, GET_POKEMON_SUCCESS} from '../actions/types';

const initialState = {
    pokemonList: [],
    isLoading: false,
    error: ''
};

const pokemonServiceReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POKEMON:
            return {
                ...state,
                isLoading: true
            };
        case GET_POKEMON_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case GET_POKEMON_SUCCESS:
            return {
                ...state,
                pokemonList: [...state.pokemonList, action.payload],
                error: '',
                isLoading: false
            }
        default:
            return state;
    }
}

export default pokemonServiceReducer;