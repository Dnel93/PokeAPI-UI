import React from 'react';

import './Spinner.css';

const Spinner = () => (
  <div className='lds-ellipsis' data-testid='Spinner'>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default Spinner;