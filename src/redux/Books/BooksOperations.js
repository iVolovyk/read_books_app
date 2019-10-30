/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { addBookStart, addBookSuccess, addBookError } from './booksActions';

export const addBook = book => dispatch => {
  dispatch(addBookStart());

  axios
    .post('https://book-read.goit.co.ua/api/v1/books/create', book)
    .then(response => {
      dispatch(addBookSuccess(response.data));
    })
    .catch(error => {
      dispatch(addBookError(error));
    });
};
