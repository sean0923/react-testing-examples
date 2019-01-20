import React from 'react';
import { render, fireEvent, getByPlaceholderText } from 'react-testing-library';

import Form from '../pages/Form';

const FirstName = 'Sean';
const LastName = 'Hong';

describe('Testing Form Page', () => {
  test('Able to type input', () => {
    const { getByPlaceholderText, getByLabelText } = render(<Form />);

    const firstNameInputField = getByPlaceholderText(/First Name/i);
    const lastNameInputField = getByLabelText(/Last Name/i);

    fireEvent.change(firstNameInputField, { target: { value: FirstName } });
    fireEvent.change(lastNameInputField, { target: { value: LastName } });

    expect(firstNameInputField.getAttribute('value')).toEqual(FirstName);
    expect(lastNameInputField.getAttribute('value')).toEqual(LastName);
  });
});
