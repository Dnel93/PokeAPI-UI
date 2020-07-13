import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Pokemon from '../../../components/Pokemon/Pokemon';

const pokemon_data = {
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
        name: 'electric'
      }
    },
    {
      slot: 3,
      type: {
        name: 'water'
      }
    },
    {
      slot: 4,
      type: {
        name: 'grass'
      }
    },
    {
      slot: 5,
      type: {
        name: 'poison'
      }
    },
    {
      slot: 6,
      type: {
        name: 'flying'
      }
    },
    {
      slot: 7,
      type: {
        name: 'bug'
      }
    },
    {
      slot: 8,
      type: {
        name: 'normal'
      }
    },
    {
      slot: 9,
      type: {
        name: 'psychic'
      }
    },
    {
      slot: 10,
      type: {
        name: 'dragon'
      }
    },
    {
      slot: 11,
      type: {
        name: ''
      }
    }
  ]
};


it('Pokemon should render properly', () => {
  const { getAllByTestId } = render(<Pokemon pokemon={pokemon_data} />);
  expect(getAllByTestId('Pokemon')).toBeTruthy();
});

it('Pokemon should show the types properly', () => {
  const { getAllByTestId } = render(<Pokemon pokemon={pokemon_data} />);
  expect(getAllByTestId('cardType')).toBeTruthy();
});

it('Pokemon should be able to change between types properly', () => {
  const { getAllByTestId } = render(<Pokemon pokemon={pokemon_data} />);
  fireEvent.click(getAllByTestId('cardType')[0]);
  fireEvent.click(getAllByTestId('cardType')[1]);
  fireEvent.click(getAllByTestId('cardType')[2]);
  fireEvent.click(getAllByTestId('cardType')[3]);
  fireEvent.click(getAllByTestId('cardType')[4]);
  fireEvent.click(getAllByTestId('cardType')[5]);
  fireEvent.click(getAllByTestId('cardType')[6]);
  fireEvent.click(getAllByTestId('cardType')[7]);
  fireEvent.click(getAllByTestId('cardType')[8]);
  fireEvent.click(getAllByTestId('cardType')[9]);
  fireEvent.click(getAllByTestId('cardType')[10]);
  expect(getAllByTestId('cardType')).toBeTruthy();
});
