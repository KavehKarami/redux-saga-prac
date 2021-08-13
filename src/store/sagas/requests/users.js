import axios from "axios";

export function requestGetUsers() {
  return axios.request({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    headers: {
      'Content-Type': 'application/json',
    }
  });
}
