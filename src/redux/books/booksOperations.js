import { toast } from 'react-toastify';
import {
  addBookStart,
  addBookSuccess,
  addBookError,
  changeBookStatsStart,
  changeBookStatsSuccess,
  changeBookStatsError,
} from './booksActions';
import { addBookOnServer, editBookStats } from '../../services/api';

toast.configure({
  autoClose: 5000,
  draggable: false,
});

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

export const changeBookStats = stats => (dispatch, getStore) => {
  const { token } = getStore().session;
  const bookId = getStore().bookIdInSummaryModal;
  dispatch(changeBookStatsStart());
  editBookStats(stats, token, bookId)
    .then(response => {
      dispatch(changeBookStatsSuccess(response.data.books));
    })
    .catch(error => {
      dispatch(changeBookStatsError(error));
    });
};
