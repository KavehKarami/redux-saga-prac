import { takeLatest } from "redux-saga/effects";
import { GET_TODOS } from "../reducers/todos";
import { GET_USERS } from "../reducers/users";
import { handlerGetTodos } from "./handler/todos";
import { handlerGetUsers } from "./handler/users";

export function* watcherSaga() {
  yield takeLatest(GET_USERS, handlerGetUsers);
  yield takeLatest(GET_TODOS, handlerGetTodos);
}
