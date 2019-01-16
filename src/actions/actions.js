import * as types from './types';

export const dummyAction = () => {
  return {
    type: types.DUMMY_ACTION,
    payload: 'dummy action',
  };
};

export const increment = num => {
  return {
    type: types.INCREMENT,
    payload: num++,
  };
};

export const decrement = num => {
  return {
    type: types.INCREMENT,
    payload: num--,
  };
};
