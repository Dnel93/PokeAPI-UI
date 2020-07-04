import React from 'react';
import { connect } from 'react-redux';

import { closeAlert } from '../../redux/actions/pokemon-service-actions';

const Alert = (props) => {
  return (
    <div
      className='alert alert-danger alert-dismissible fade show'
      role='alert'
    >
      {props.error}
      <button
        type='button'
        className='close'
        id='closeAlert'
        onClick={props.closeAlert}
      >
        <span aria-hidden='true'>&times;</span>
      </button>
    </div>
  );
};

export default connect(null, {closeAlert})(Alert);
