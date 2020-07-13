import React from 'react';
import { render } from '@testing-library/react';

import NotFound from '../../../routes/NotFound/NotFound';

it('Should render Not found message', () => {
  const { getByTestId, getByText} = render(<NotFound />);

  expect(getByText('Not found bro')).toBeTruthy();
  expect(getByTestId('NotFound')).toBeTruthy();
})