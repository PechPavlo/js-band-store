export const getUsersStarted = () => ({
  type: 'GET_USERS_STARTED',
});

export const getUsersSuccess = (users) => ({
  type: 'GET_USERS_SUCCESS',
  payload: users,
});

export const getUsersFailure = (error) => ({
  type: 'GET_USERS_FAILURE',
  payload: {
    error,
  },
});

export const getUsers = () => (dispatch) => {
  dispatch(getUsersStarted());

  fetch('http://158.101.166.74:8080/api/data/pavlo_pechenevskyi/users', {
    method: 'get',
  })
    .then((res) => res.json())
    .then((res) => res.map((elem) => ({ id: elem.id, data: JSON.parse(elem.data.replaceAll('\\"', '"')) })))
    .then((res) => dispatch(getUsersSuccess(res)))
    .catch((error) => dispatch(getUsersFailure(error.message)));
};
