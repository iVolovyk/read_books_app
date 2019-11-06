import { getBooks } from '../books/booksSelectors';

export const getFromClickBtnEditRating = state => {
  return getBooks(state).find(el => el._id === state.bookIdInSummaryModal)
    .rating;
};

export const getFromClickBtnEditComment = state => {
  return getBooks(state).find(el => el._id === state.bookIdInSummaryModal)
    .comment;
};
export const getBookId = state => state.bookIdInSummaryModal;
