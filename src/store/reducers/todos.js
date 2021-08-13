export const GET_TODOS = "GET_TODOS";
export const SET_TODOS = "SET_TODOS";

export const getTodos = () => ({
  type: GET_TODOS,
});

export const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: {
    todos,
  },
});

function todosReducer(state = [], action) {
  if (action.type === SET_TODOS) return [...action.payload.todos];
  return state;
}
export default todosReducer;
