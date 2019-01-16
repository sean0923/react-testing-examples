import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

const middleware = [thunk];

const isThereReduxDevtool = window.__REDUX_DEVTOOLS_EXTENSION__;

const composeWithArgs =
  process.env.NODE_ENV === 'development' && isThereReduxDevtool
    ? compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__())
    : compose(applyMiddleware(...middleware));

const store = createStore(rootReducer, {}, composeWithArgs);

export default store;
