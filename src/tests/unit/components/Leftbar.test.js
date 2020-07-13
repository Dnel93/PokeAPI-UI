import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Leftbar from '../../../components/Leftbar/Leftbar';

it('Should render component properly', () => {
  const { getByTestId } = render(<Leftbar />);
  expect(getByTestId('Leftbar')).toBeTruthy();
});

it('Should render PokeAPI header properly', () => {
  const { getByTestId } = render(<Leftbar />);
  expect(getByTestId('Leftbar-Header')).toBeTruthy();
});

it('Should handle onSubmit properly', () => {
  const { getByTestId } = render(<Leftbar />);
  fireEvent.submit(getByTestId('Leftbar-Form'));
  expect(getByTestId('Leftbar-Form')).toBeTruthy();
});

// TODO: Update test to handle Async
it('Should handle keyPress properly', () => {
  const {getByTestId} = render(<Leftbar />);
  fireEvent.keyDown(getByTestId('Leftbar-Input'), {key: 'Enter', code: 'Enter'});
  expect(getByTestId('Leftbar-Input')).toBeTruthy();

});

describe('External Components', () => {
  it('Should render Spinner properly', () => {
    const { getByTestId } = render(<Leftbar isLoading />);
    expect(getByTestId('Spinner')).toBeTruthy();
  });

  // TODO: Update test to use Redux
  xit('Should render Alert properly', () => {
    const { getByTestId } = render(<Leftbar error='An error has ocurred' />);
    expect(getByTestId());
  });
});
