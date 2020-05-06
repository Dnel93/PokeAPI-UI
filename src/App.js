import React from 'react';
import './App.css';
import Pokemon from './components/Pokemon/Pokemon';

function App() {
  return (
    <div className="App">
      <Pokemon name="Bulbasaur" />
      <Pokemon name="Ivysaur" />
      <Pokemon name="Venusaur" />
      <Pokemon name="Charmander" />
      <Pokemon name="Charmeleon" />
      <Pokemon name="Charizard" />
      <Pokemon name="Squirtle" />
      <Pokemon name="Wartortle" />
      <Pokemon name="Blastoise" />
      <Pokemon name="Caterpie" />
      <Pokemon name="Metapod" />
      <Pokemon name="Butterfree" />
    </div>
  );
}

export default App;
