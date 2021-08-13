import axios from "axios";

export function requestGetTodos() {
  return axios.request({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/todos",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
