export const GET_USERS = "GET_USERS";
export const SET_USERS = "SET_USERS";

export const getUsers = () => ({
  type: GET_USERS,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: {
    users,
  },
});

function usersReducer(state = [], action) {
  if (action.type === SET_USERS) {
    return [...action.payload.users];
  }
  return state;
}

export default usersReducer;
