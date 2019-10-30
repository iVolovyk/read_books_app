/* eslint-disable import/prefer-default-export */
import { addBookStart, addBookSuccess, addBookError } from './booksActions';
import { addBookOnServer } from '../../services/api';

export const addBook = book => dispatch => {
  dispatch(addBookStart());

  addBookOnServer(book)
    .then(response => {
      dispatch(addBookSuccess(response.data));
    })
    .catch(error => {
      dispatch(addBookError(error));
    });
};
