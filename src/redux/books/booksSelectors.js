export const getBooks = state => state.booksReducer.books;

// export const getReadBooks = state => getBooks(state).filter(el => el.status = "read");
// export const getNowReadBooks = state => getBooks(state).filter(el => el.status === 'now';
export const getPlaneReadBooks = state =>
  getBooks(state).filter(el => el.status === 'planned');
