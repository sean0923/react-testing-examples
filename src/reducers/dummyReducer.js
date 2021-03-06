import * as types from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.DUMMY_ACTION:
      return { dummyStr: action.payload };

    default:
      return state;
  }
};
