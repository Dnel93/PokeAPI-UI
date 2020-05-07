import React from 'react';

import Pokemon from '../Pokemon/Pokemon';

function Content() {
    return(
        <div className="offset-2 col-10 h-100 bg-secondary text-white py-2 d-flex fixed-top overflow-auto">
            <div className="content">
                <Pokemon name="Bulbasaur" />
                <Pokemon name="Ivysaur" />
                <Pokemon name="Venusaur" />

                <Pokemon name="Charmander" />
                <Pokemon name="Charmeleon" />
                <Pokemon name="Charizard" />

                <Pokemon name="Squirtle" />
                <Pokemon name="Wartortle" />
                <Pokemon name="Blastoise" />

            </div>
        </div>
    );
}

export default Content;