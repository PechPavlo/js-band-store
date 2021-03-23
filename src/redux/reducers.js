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
      };
    case 'GET_BOOK_CATALOG_STARTED':
      return {
        ...state,
        booksCatalog: {
          ...state.booksCatalog,
          isLoading: true,
          error: null,
        },
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
      };

    default:
      return { ...state };
  }
};

export default reducer;
