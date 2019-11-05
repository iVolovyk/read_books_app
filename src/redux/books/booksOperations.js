import {
  addBookStart,
  addBookSuccess,
  addBookError,
  changeBookStatsStart,
  changeBookStatsSuccess,
  changeBookStatsError,
} from './booksActions';
import { addBookOnServer, editBookStats } from '../../services/api';

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
