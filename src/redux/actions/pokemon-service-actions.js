/** Action types */
export const SEARCH_POKEMON = "SEARCH_POKEMON";
export const ADD_POKEMON = "ADD_POKEMON";

/** Actions */
export function searchPokemon(name)  {
    return {
        type: SEARCH_POKEMON,
        name
    }
}

export function addPokemon(pokemon) {
    return {
        type: ADD_POKEMON,
        pokemon
    }

}