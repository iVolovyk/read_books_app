import { addBookStart, addBookSuccess, addBookError } from './booksActions';
import { addBookOnServer } from '../../services/api';

const addBook = book => (dispatch, getStore) => {
  const { token } = getStore().session;
  dispatch(addBookStart());
  addBookOnServer(book, token)
    .then(response => {
      console.log(response);
      dispatch(addBookSuccess(response.data));
    })
    .catch(error => {
      dispatch(addBookError(error));
    });
};

export default addBook;
