import { call, put } from "redux-saga/effects";
import { setUsers } from "../../reducers/users";
import { requestGetUsers } from "../requests/users";

export function* handlerGetUsers(action) {
  try {
    const response = yield call(requestGetUsers);
    const { data } = response;
    yield put(setUsers(data));
  } catch (e) {
    console.log(e);
  }
}
