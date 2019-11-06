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

export const addBookOnServer = (book, token) =>
  axios.post('/books/create', book, setToken(token));

export const getUserByToken = token => axios.get('/user/me', setToken(token));

export const getBooks = token => axios.get('/books', setToken(token));

export const getTraining = token => axios.get('/training', setToken(token));

export const chekBookOnServer = (chekBookInfo, patchObject, token) =>
  axios.patch(
    `/training/${chekBookInfo.TrainingId}/book/${chekBookInfo.bookId}`,
    patchObject,
    setToken(token),
  );

export const addResult = (result, token, trainingId) =>
  axios.post(`/training/time/${trainingId}`, result, setToken(token));

export const logOut = token => axios.post('/auth/logout', setToken(token));

export const register = credentials =>
  axios.post('/auth/register', credentials);

export const login = credentials => axios.post('/auth/login', credentials);

export const fechCloseTraning = (object, token, trainingId) =>
  axios.patch(`/training/${trainingId}`, object, setToken(token));

export const editBookStats = (booksStats, token, bookId) =>
  axios.patch(`/books/${bookId}`, booksStats, setToken(token));

export const addTraining = (trainingData, token) =>
  axios.post('/training', trainingData, setToken(token));
