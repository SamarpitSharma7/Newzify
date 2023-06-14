import React from 'react';
// import loading from './loading.gif';

const  Spinner=()=> {
  return (
    <div className="d-flex justify-content-center align-items-center" >
      <div className="spinner-grow text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;