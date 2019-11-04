/* eslint-disable import/prefer-default-export */
// import { getBooks } from '../books/booksSelectors';
import delBooks from '../../components/BooksList/toDeletebookList.json';

// export const getFromClickBtnEdit = state =>
//   getBooks(state).find(el => el.id === state.bookIdInSummaryModal);

export const getFromClickBtnEdit = state => {
  delBooks.toRead.find(el => +el.id === state.bookIdInSummaryModal);
};
