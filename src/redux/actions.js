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

export const getBookDetailsStarted = () => ({
  type: 'GET_BOOK_DETAILS_STARTED',
});

export const getBookDetailsSuccess = (book) => ({
  type: 'GET_BOOK_DETAILS_SUCCESS',
  payload: book,
});

export const getBookDetailsFailure = (error) => ({
  type: 'GET_BOOK_DETAILS_FAILURE',
  payload: {
    error,
  },
});

export const getBookDetails = (token, id) => (dispatch) => {
  dispatch(getBookDetailsStarted());
  axios
    .get(`books/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch(getBookDetailsSuccess(res.data));
    })
    .catch((error) => dispatch(getBookDetailsFailure(error.message)));
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

export const purchaseBooksStarted = () => ({
  type: 'PURCHASE_BOOKS_STARTED',
});

export const purchaseBooksSuccess = (message) => ({
  type: 'PURCHASE_BOOKS_SUCCESS',
  payload: message,
});

export const purchaseBooksFailure = (error) => ({
  type: 'PURCHASE_BOOKS_FAILURE',
  payload: {
    error,
  },
});

export const purchaseBooks = (token, books) => (dispatch) => {
  dispatch(purchaseBooksStarted());
  axios
    .post('purchase',
      {
        books: [...books],
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    .then((res) => {
      dispatch(purchaseBooksSuccess(res.data));
    })
    .catch((error) => dispatch(purchaseBooksFailure(error.message)));
};

export const resetError = () => ({
  type: 'RESET_ERROR',
});

export const closePurchaseModal = () => ({
  type: 'CLOSE_PURCHASE_MODAL',
});

export const addToCart = (books) => ({
  type: 'ADD_TO_CART',
  payload: books,
});

export const signOut = () => ({
  type: 'SIGN_OUT',
});
