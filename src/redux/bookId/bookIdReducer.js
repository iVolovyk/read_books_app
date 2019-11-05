import { Type } from './bookIdActions';

const bookIdReducer = (state = '', { type, payload }) => {
  switch (type) {
    case Type.SET_ID_BOOK_SUMMARY_MODAL:
      return payload;
    default:
      return state;
  }
};

export default bookIdReducer;
