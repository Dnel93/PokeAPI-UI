import React from 'react';

import './Leftbar.css';

function Leftbar() {
    function handleOnSubmit(e) {
        e.preventDefault();
    }


    return(
        <div className="col-2 h-100 bg-dark text-white py-2 d-flex justify-content-center fixed-top">
            <div className="Leftbar">
                <h1>PokeAPI</h1>
                <hr/>
                <div>
                    <form onSubmit={handleOnSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control bg-dark text-light" placeholder="Pikachu, Entei..."/>
                        </div>
                        <div className="form-group">
                            <input type="button" value="Search" className="btn btn-light"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Leftbar;