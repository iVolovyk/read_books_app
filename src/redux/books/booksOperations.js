import { toast } from 'react-toastify';
import { addBookStart, addBookSuccess, addBookError } from './booksActions';
import { addBookOnServer } from '../../services/api';

toast.configure({
  autoClose: 5000,
  draggable: false,
});

// Запускаем асинхронную функцию
// eslint-disable-next-line import/prefer-default-export
export const addBook = book => (dispatch, getStore) => {
  const { token } = getStore().session;
  dispatch(addBookStart());
  addBookOnServer(book, token)
    .then(response => {
      dispatch(addBookSuccess(response.data));
    })
    .catch(error => {
      toast.error(
        'Сталася помилка. Сервіс тимчасово недоступний. Спробуйте, будь-ласка, пізніше',
        {
          position: toast.POSITION.TOP_CENTER,
          className: 'foo-bar',
        },
      );
      return dispatch(addBookError(error));
    });
};
