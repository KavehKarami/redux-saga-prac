import { call, put } from "redux-saga/effects";
import { setTodos } from "../../reducers/todos";
import { requestGetTodos } from "../requests/todos";

export function* handlerGetTodos() {
  try {
    const response = yield call(requestGetTodos);
    const { data } = response;
    yield put(setTodos(data));
  } catch (e) {
    console.log(e);
  }
}
