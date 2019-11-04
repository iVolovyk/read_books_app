export const getResult = state => state.results;

export const dataSchedule = state =>
  state.results.map(i => {
    return { date: i.data, pages: i.peges };
  });

export const DEFULT = state => state.booksReducer.books;
