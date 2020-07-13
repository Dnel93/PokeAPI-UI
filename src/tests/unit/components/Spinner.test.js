import React from 'react';
import {render} from '@testing-library/react';
import Spinner from '../../../components/Spinner/Spinner';

it('Should render correctly', () => {
  const { queryByTestId } = render(<Spinner />);

  expect(queryByTestId("Spinner")).toBeTruthy();
});