import React from 'react';
import Pokemon from '../Pokemon/Pokemon';

import './Content.css';

const Content = ({ pokemonList }) => {
  const showPokemons = () => {
    return pokemonList
      .slice(0)
      .reverse()
      .map(pokemon => {
        return <Pokemon key={pokemon.id} pokemon={pokemon} />;
      });
  };

  return (
    <div className='offset-2 col-10 h-100 bg-secondary text-white py-2 d-flex fixed-top overflow-auto content' data-testid='Content'>
      <div>{showPokemons()}</div>
    </div>
  );
};

export default Content;
