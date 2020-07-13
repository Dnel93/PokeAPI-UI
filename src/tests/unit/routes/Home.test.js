import React from 'react';
import { render } from '@testing-library/react';

import Home from '../../../routes/Home/Home';

// TODO: Update test to work with Redux too
xit('Should render component properly', () => {
  const { getByTestId } = render(<Home />);
  expect(getByTestId('Home')).toBeTruthy();
});