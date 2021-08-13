import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import todosReducer from "./reducers/todos";
import usersReducer from "./reducers/users";
import { watcherSaga } from "./sagas/rootSaga";

const reducers = combineReducers({
  users: usersReducer,
  todos: todosReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducers, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
