import React from 'react';
import { render } from 'react-testing-library';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from '../../reducers/rootReducer';

export const renderWithRedux = (
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  };
};
