import React from 'react';
import {getPokemon} from '../../services/poke-api';
import './Leftbar.css';

function Leftbar() {
    function handleOnSubmit(e) {
        e.preventDefault();
    }

    function handleKeyPress(e) {
        if(e.keyCode === 13) {
            getPokemon(e.target.value).then(pokemon => {
                console.log(pokemon);
            });
            e.target.value = "";
        }
    }


    return(
        <div className="col-2 h-100 bg-dark text-white py-2 d-flex justify-content-center fixed-top">
            <div className="Leftbar">
                <h1>PokeAPI</h1>
                <hr/>
                <div>
                    <form onSubmit={handleOnSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control bg-dark text-light" onKeyDown={handleKeyPress} placeholder="Pikachu, Entei..."/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Leftbar;