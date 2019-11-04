export const getResult = state => state.results;

export const dataSchedule = state =>
  state.results.map(i => {
    return { date: i.data, pages: i.peges };
  });

export const DEFULT = state => state.booksReducer.books;

export const getBooksForCheckList = state => state.training.books;
export const getTrainingId = state => state.training.trainingId;

export const getTimeStart = state => state.training.timeStart;
export const getTimeEnd = state => state.training.timeEnd;
