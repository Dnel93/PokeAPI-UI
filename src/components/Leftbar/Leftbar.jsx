import React from 'react';
import { connect } from 'react-redux';
import * as pokemonServiceActions from '../../redux/actions/pokemon-service-actions';
import './Leftbar.css';

const Leftbar = props => {
  const handleOnSubmit = e => {
    e.preventDefault();
  };

  const handleKeyPress = async e => {
    e.persist();
    const { getPokemon } = props;

    if (e.keyCode === 13) {
      await getPokemon(e.target.value);
      e.target.value = '';
    }
  };

  return (
    <div className='col-2 h-100 py-2 d-flex justify-content-center fixed-top Leftbar'>
      <div>
        <h1 className='Leftbar-Header'>PokeAPI</h1>
        <hr />
        <div>
          <form onSubmit={e => handleOnSubmit(e)}>
            <div className='form-group'>
              <input
                type='text'
                className='form-control bg-dark text-light'
                onKeyDown={e => handleKeyPress(e)}
                placeholder='Pikachu, Entei...'
              />
            </div>
          </form>
        </div>
        <hr />
        <a className='twitter-account' href='https://twitter.com/nikedanz'>
          @Nikedanz
        </a>
      </div>
    </div>
  );
};

export default connect(null, pokemonServiceActions)(Leftbar);
