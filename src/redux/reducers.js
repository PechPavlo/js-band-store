const reducer = (state, action) => {
  switch (action.type) {
    case 'AUTHORIZE_USER_STARTED':
      return {
        ...state,
        user: {
          ...state.user,
          isAuthorized: false,
          error: null,
        },
        error: null,
        message: null,
      };

    case 'AUTHORIZE_USER_SUCCESS':
      return {
        ...state,
        user: {
          ...state.user,
          isAuthorized: true,
          userName: action.payload.username,
          avatar: action.payload.avatar,
          token: action.payload.token,
        },
      };

    case 'AUTHORIZE_USER_FAILURE':
      return {
        ...state,
        user: {
          ...state.user,
          isAuthorized: true,
          error: action.payload.error,
        },
        error: action.payload.error,
      };

    case 'GET_BOOK_CATALOG_STARTED':
      return {
        ...state,
        booksCatalog: {
          ...state.booksCatalog,
          isLoading: true,
          error: null,
        },
        error: null,
        message: null,
      };

    case 'GET_BOOK_CATALOG_SUCCESS':
      return {
        ...state,
        booksCatalog: {
          ...state.booksCatalog,
          isLoading: false,
          books: action.payload,
        },
      };

    case 'GET_BOOK_CATALOG_FAILURE':
      return {
        ...state,
        booksCatalog: {
          ...state.booksCatalog,
          isLoading: false,
          error: action.payload.error,
        },
        error: action.payload.error,
        message: 'You should reauthorize.',
      };

    case 'GET_BOOK_DETAILS_STARTED':
      return {
        ...state,
        book: {
          ...state.book,
          isLoading: true,
          error: null,
        },
        error: null,
        message: null,
      };

    case 'GET_BOOK_DETAILS_SUCCESS':
      return {
        ...state,
        book: {
          ...state.book,
          isLoading: false,
          details: action.payload,
        },
      };

    case 'GET_BOOK_DETAILS_FAILURE':
      return {
        ...state,
        book: {
          ...state.book,
          isLoading: false,
          error: action.payload.error,
        },
        error: action.payload.error,
      };

    case 'PURCHASE_BOOKS_STARTED':
      return {
        ...state,
        purchase: {
          ...state.purchase,
          isLoading: true,
          error: null,
        },
        error: null,
      };

    case 'PURCHASE_BOOKS_SUCCESS':
      return {
        ...state,
        purchase: {
          ...state.purchase,
          isActive: true,
          isLoading: false,
          message: action.payload,
        },
        cart: {
          ...state.cart,
          books: [],
        },
      };

    case 'PURCHASE_BOOKS_FAILURE':
      return {
        ...state,
        purchase: {
          ...state.purchase,
          isLoading: false,
          error: action.payload.error,
        },
        error: action.payload.error,
      };

    case 'RESET_ERROR':
      return {
        ...state,
        error: null,
      };

    case 'CLOSE_PURCHASE_MODAL':
      return {
        ...state,
        purchase: {
          ...state.purchase,
          isActive: false,
          message: null,
          books: [],
        },
      };

    case 'ADD_TO_CART':
      return {
        ...state,
        cart: {
          ...state.cart,
          books: [
            ...state.cart.books,
            ...action.payload,
          ],
        },
        purchase: {
          ...state.purchase,
          books: [
            ...state.purchase.books,
            ...action.payload,
          ],
        },
      };

    case 'SIGN_OUT':
      return {
        ...state,
        user: {
          ...state.user,
          isAuthorized: false,
          userName: '',
          avatar: '',
          token: '',
        },
      };

    default:
      return { ...state };
  }
};

export default reducer;
