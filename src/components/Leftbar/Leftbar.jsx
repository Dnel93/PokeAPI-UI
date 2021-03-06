import React from 'react';
import './Leftbar.css';

import Spinner from '../Spinner/Spinner';
import Alert from '../../containers/Alert/Alert';

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
    <div className='col-2 h-100 py-2 d-flex justify-content-center fixed-top Leftbar' data-testid='Leftbar'>
      <div>
        <h1 className='Leftbar-Header' data-testid='Leftbar-Header'>PokeAPI</h1>
        <hr />
        <div>
          <form onSubmit={e => handleOnSubmit(e)} data-testid='Leftbar-Form'>
            <div className='form-group'>
              <input
                type='text'
                className='form-control bg-dark text-light'
                onKeyDown={e => handleKeyPress(e)}
                placeholder='Pikachu, Entei...'
                data-testid='Leftbar-Input'
              />
            </div>
          </form>
        </div>
        {props.isLoading && <Spinner />}
        {props.error && <Alert error={props.error} />}
        <hr />
        <a className='twitter-account' href='https://twitter.com/nikedanz' data-testid='Leftbar-Twitter'>
          @Nikedanz
        </a>
      </div>
    </div>
  );
};



export default Leftbar;
