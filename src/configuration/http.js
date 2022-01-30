import axios from "axios";

const http = axios.create();

http.interceptors.request.use(
  async (req) => {
    const originalRequest = req;
    return originalRequest;
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
