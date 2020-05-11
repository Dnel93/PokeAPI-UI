import React from 'react';

import Pokemon from '../Pokemon/Pokemon';

import './Content.css';

function Content() {
    return(
        <div className="offset-2 col-10 h-100 bg-secondary text-white py-2 d-flex fixed-top overflow-auto content">
            <div>
                <Pokemon name="Bulbasaur" />
                <Pokemon name="Ivysaur" />
                <Pokemon name="Venusaur" />

                <Pokemon name="Charmander" />
                <Pokemon name="Charmeleon" />
                <Pokemon name="Charizard" />

                <Pokemon name="Squirtle" />
                <Pokemon name="Wartortle" />
                <Pokemon name="Blastoise" />

                <Pokemon name="10" />
                <Pokemon name="11" />
                <Pokemon name="12" />

                <Pokemon name="13" />
                <Pokemon name="14" />
                <Pokemon name="15" />

                <Pokemon name="16" />
                <Pokemon name="17" />
                <Pokemon name="18" />
            </div>
        </div>
    );
}

export default Content;