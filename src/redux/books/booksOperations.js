import { addBookStart, addBookSuccess, addBookError } from './booksActions';
import { addBookOnServer } from '../../services/api';

const addBook = book => dispatch => {
  dispatch(addBookStart());

  addBookOnServer(book)
    .then(response => {
      dispatch(addBookSuccess(response.data));
    })
    .catch(error => {
      dispatch(addBookError(error));
    });
};

export default addBook;
