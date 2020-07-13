import React from 'react';
import {render} from '@testing-library/react';

import Alert from '../../../components/Alert/Alert';
it('Should render correctly', () => {
  const {getByTestId} = render(<Alert />);

  expect(getByTestId('Alert-ErrorMessage')).toBeTruthy();
  expect(getByTestId('Alert-CloseButton')).toBeTruthy();
});

it('Should show error message', () => {
  const {getByText} = render(<Alert error='An error has ocurred' />);

  expect(getByText('An error has ocurred')).toBeTruthy();
});