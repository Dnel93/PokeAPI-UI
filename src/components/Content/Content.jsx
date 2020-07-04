import React from 'react';
import { connect } from 'react-redux';

import Pokemon from '../Pokemon/Pokemon';

import './Content.css';

const Content = (props) => {

    const showPokemons = () => {
        const {pokemonList} = props;
        return pokemonList.slice(0).reverse().map(pokemon => {
            return <Pokemon
                        key={pokemon.id}
                        pokemon={pokemon}
                    />
        });
    }

    return (
        <div className="offset-2 col-10 h-100 bg-secondary text-white py-2 d-flex fixed-top overflow-auto content">
            <div>
                {showPokemons()}
            </div>
        </div>
    );
}

const mapStateToProps = (reducers) => {
    return reducers.pokemonServiceReducer
}

export default connect(mapStateToProps, null)(Content);