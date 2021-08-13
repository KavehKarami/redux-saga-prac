import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./store/reducers/todos";
import { getUsers } from "./store/reducers/users";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div>
      <h1 className="title">this is a redux saga -- users</h1>
      <div className="cardBx">
        {users &&
          users.map((user, index) => (
            <div className="card" key={index}>
              <h2>name: {user.name}</h2>
              <h3>username: {user.username}</h3>
              <p>emil: {user.email}</p>
            </div>
          ))}
      </div>
      <h1 className="title">this is a redux saga -- todos</h1>
      <div className="cardBx">
        {todos &&
          todos.map((todo, index) => (
            <div className="card" key={index}>
              <h2>title: {todo.title}</h2>
              <h3>{todo.completed ? "completed" : "not completed"}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
