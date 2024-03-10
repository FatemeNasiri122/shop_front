import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_URL}`
});

api.interceptors.request.use(
  (config) => {
    console.log(config);
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['token'] = token;
    }
    if (!config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/json';
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    console.log(window.location.pathname);
    const { pathname } = window.location;
    if (
      error?.response?.data.message === 'jwt expired' &&
      pathname !== ('/signin-or-register' || '/')
    ) {
      // window.location.href = 'https://shop-front-1.onrender.com/signin-or-register';
      window.location.href = 'https://shop-front-1.onrender.com';
    }
    return Promise.reject(error);
  }
);

export default api;
