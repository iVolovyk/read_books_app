import { addBookStart, addBookSuccess, addBookError } from './booksActions';
import { addBookOnServer } from '../../services/api';

// eslint-disable-next-line import/prefer-default-export
export const addBook = book => (dispatch, getStore) => {
  const { token } = getStore().session;
  dispatch(addBookStart());
  addBookOnServer(book, token)
    .then(response => {
      dispatch(addBookSuccess(response.data));
    })
    .catch(error => {
      dispatch(addBookError(error));
    });
};
