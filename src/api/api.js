import axios from 'axios';
import { deleteCookie, getCookie } from '../utils/cookie';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_URL}`
});

api.interceptors.request.use(
  (config) => {
    // console.log(config);
    const token = getCookie("token");
    if (token) {
      config.headers['token'] = token;
    }
    if (!config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/json';
    }
    return config;
  },
  (error) => {
    // console.log(error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // console.log(response);
    return response;
  },
  (error) => {
    // console.log(error);
    const { pathname } = window.location;
    if (
      error?.response?.data?.message === 'jwt expired' &&
      pathname !== ('/signin-or-register' || '/')
    ) {
      deleteCookie("token");
      // window.location.href = `http://localhost:5173/signin-or-register`;
      window.location.href = `https://clothingshop.onrender.com/signin-or-register`;

    }
    return Promise.reject(error);
  }
);

export default api;
