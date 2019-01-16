import * as types from '../actions/types';

export default (state = { num: 0 }, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return { num: action.payload };

    case types.DECREMENT:
      return { num: action.payload };

    default:
      return state;
  }
};
