import React from 'react';
import { fireEvent } from 'react-testing-library';

import { renderWithRedux } from './testHelper';

import Redux from '../pages/Redux';

describe('Testing Local Counter', () => {
  test('clicking decrement and increment changes number', () => {
    const { getByText, getByTestId } = renderWithRedux(<Redux />);

    const number = getByTestId('number');

    const decrementBtn = getByText(/-1/i);
    const incrementBtn = getByText(/\+1/i);

    expect(number.textContent).toEqual('0');

    fireEvent.click(decrementBtn);
    expect(number.textContent).toEqual('-1');

    fireEvent.click(decrementBtn);
    expect(number.textContent).toEqual('-2');

    fireEvent.click(incrementBtn);
    expect(number.textContent).toEqual('-1');
  });
});
