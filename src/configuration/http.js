import axios from "axios";

const http = axios.create();

http.interceptors.request.use(
  async (req) => {
    return req;
  },
  (err) => Promise.reject(err)
);

http.interceptors.response.use(
  async (res) => {
    return res;
  },
  (err) => Promise.reject(err)
);

export default http;
