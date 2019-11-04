/* eslint-disable import/prefer-default-export */
import { Type } from './bookIdActions';

// eslint-disable-next-line
const bookIdReducer = (state = '', { type, payload }) => {
  switch (type) {
    case Type.SET_ID_BOOK_SUMMARY_MODAL:
      return payload;
    default:
      return state;
  }
};

export default bookIdReducer;
