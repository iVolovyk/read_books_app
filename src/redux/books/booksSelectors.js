export const StatusBooks = {
  READING: 'reading',
  READED: 'readed',
  PLANNED: 'planned',
};

export const getBooks = state => state.books;

export const getReadBooks = state => {
  return getBooks(state).filter(el => el.status === StatusBooks.READED);
};

export const getNowReadBooks = state => {
  return getBooks(state).filter(el => el.status === StatusBooks.READING);
};

export const getPlaneReadBooks = state => {
  return getBooks(state).filter(el => el.status === StatusBooks.PLANNED);
};

export const getBooksForList = state =>
  state.books.filter(book => book.status === StatusBooks.PLANNED);
