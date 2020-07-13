import React from 'react';
import { render } from '@testing-library/react';

import Content from '../../../components/Content/Content';

const pokemon_list = [
  {
    id: 25,
    name: 'pikachu',
    sprites: {
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
    },
    types: [
      {
        slot: 1,
        type: {
          name: 'electric'
        }
      }
    ]
  },
  {
    id: 6,
    name: 'charizard',
    sprites: {
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png',
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
    },
    types: [
      {
        slot: 1,
        type: {
          name: 'fire'
        }
      },
      {
        slot: 2,
        type: {
          name: 'flying'
        }
      }
    ]
  }
];

describe('Should render component properly', () => {
  it('With an empty list', () => {
    const { getByTestId } = render(<Content pokemonList={[]} />);
    expect(getByTestId('Content')).toBeTruthy();
  });

  it('With a list', () => {
    const { getByTestId } = render(<Content pokemonList={pokemon_list} />);
    expect(getByTestId('Content')).toBeTruthy();
  });

});