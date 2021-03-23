const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS_STARTED':
      return {
        ...state,
        isUsersUpdated: false,
        error: null,
      };

    case 'GET_USERS_SUCCESS':
      return {
        ...state,
        isUsersUpdated: true,
        isAuthorized: false,
        currentUser: action.payload[0],
        users: action.payload,
      };

    case 'GET_USERS_FAILURE':
      return {
        ...state,
        isUsersUpdated: true,
        error: action.payload.error,
      };

    default:
      return { ...state };
  }
};

export default reducer;
