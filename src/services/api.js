import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

axios.defaults.baseURL = 'https://book-read.goit.co.ua/api';

export const setToken = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const w = () => {};
