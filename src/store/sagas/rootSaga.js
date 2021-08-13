import { takeLatest } from "redux-saga/effects";
import { GET_USERS } from "../reducers/users";
import { handlerGetUsers } from "./handler/users";

export function* watcherSaga() {
  yield takeLatest(GET_USERS, handlerGetUsers);
}
