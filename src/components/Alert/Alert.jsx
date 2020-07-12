import React from 'react';

const Alert = ({error, closeAlert}) => {
  return (
    <div
      className='alert alert-danger alert-dismissible fade show'
      role='alert'
    >
      {error}
      <button
        type='button'
        className='close'
        id='closeAlert'
        onClick={closeAlert}
      >
        <span aria-hidden='true'>&times;</span>
      </button>
    </div>
  );
};

export default Alert;
