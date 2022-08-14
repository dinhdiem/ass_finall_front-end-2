import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
});

// export const userRequest = axios.create({
//   baseURL: "http://localhost:5000/api",
//   headers: { token: "Bearer " },
// });

export default instance;
