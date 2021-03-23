import axios from 'axios';

axios.defaults.baseURL = 'https://js-band-store-api.glitch.me/';

export const authorizeUserStarted = () => ({
  type: 'AUTHORIZE_USER_STARTED',
});

export const authorizeUserSuccess = (users) => ({
  type: 'AUTHORIZE_USER_SUCCESS',
  payload: users,
});

export const authorizeUserFailure = (error) => ({
  type: 'AUTHORIZE_USER_FAILURE',
  payload: {
    error,
  },
});

export const getBooksCatalogStarted = () => ({
  type: 'GET_BOOK_CATALOG_STARTED',
});

export const getBooksCatalogSuccess = (books) => ({
  type: 'GET_BOOK_CATALOG_SUCCESS',
  payload: books,
});

export const getBooksCatalogFailure = (error) => ({
  type: 'GET_BOOK_CATALOG_FAILURE',
  payload: {
    error,
  },
});

export const getBooksCatalog = (token) => (dispatch) => {
  dispatch(getBooksCatalogStarted());
  axios
    .get('books', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch(getBooksCatalogSuccess(res.data));
    })
    .catch((error) => dispatch(getBooksCatalogFailure(error.message)));
};

export const authorizeUser = (userName) => (dispatch) => {
  dispatch(authorizeUserStarted());
  axios
    .post('signin', { username: userName })
    .then((res) => {
      localStorage.pechPavloBookStore = JSON.stringify(res.data);
      dispatch(authorizeUserSuccess(res.data));
      dispatch(getBooksCatalog(res.data.token));
    })
    .catch((error) => dispatch(authorizeUserFailure(error.message)));
};
