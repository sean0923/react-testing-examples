import * as types from './types';

export const dummyAction = () => {
  return {
    type: types.DUMMY_ACTION,
    payload: 'dummy action',
  };
};

export const increment = () => {
  return {
    type: types.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: types.INCREMENT,
  };
};
