import React from 'react';
import { render, cleanup } from 'react-testing-library';

import Number from '../common/Number';

describe('Testing Number component', () => {
  beforeEach(() => {
    console.error = jest.fn();
  });

  afterEach(() => {
    cleanup();
  });

  test('there should be "number" props', () => {
    render(<Number />);
    expect(console.error).toHaveBeenCalled();
  });

  test('"number" props has to by type "number"', () => {
    render(<Number number="I am not a number" />);
    expect(console.error).toHaveBeenCalled();
  });

  test('error should be NOT called if prop is number', () => {
    render(<Number number={3} />);
    expect(console.error).not.toHaveBeenCalled();
  });
});
