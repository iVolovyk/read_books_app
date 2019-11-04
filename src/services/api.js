import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

axios.defaults.baseURL = 'https://book-read.goit.co.ua/api/v1';

export const setToken = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const addBookOnServer = book => axios.post('/books/create', book);

export const getUserByToken = token => axios.get('/user/me', setToken(token));

export const logOut = token => axios.post('/auth/logout', setToken(token));

export const register = credentials =>
  axios.post('/auth/register', credentials);

export const login = credentials => axios.post('/auth/login', credentials);
