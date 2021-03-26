/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const initUser = localStorage.pechPavloBookStore && JSON.parse(localStorage.pechPavloBookStore);

const defaultState = {
  isLoading: false,
  user: {
    isAuthorized: !!initUser,
    isLoading: false,
    userName: initUser?.username || '',
    token: initUser?.token || '',
    avatar: initUser?.avatar || '',
    error: null,
  },
  booksCatalog: {
    books: [],
    isLoading: false,
    error: null,
  },
  book: {
    details: {},
    isActive: false,
    isLoading: false,
    error: null,
  },
  cart: {
    isActive: false,
    books: [],
  },
  purchase: {
    isActive: false,
    isLoading: false,
    books: [],
    message: null,
    error: null,
  },
  error: null,
};

const composeEnhancers = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(
  reducer,
  defaultState,
  enhancer,
);

export default store;
