import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./store/reducers/users";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div>
      <h1>this is a redux saga</h1>
      {users &&
        users.map((user, index) => (
          <div key={index}>
            <h2>name: {user.name}</h2>
            <h3>username: {user.username}</h3>
            <p>emil: {user.email}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
