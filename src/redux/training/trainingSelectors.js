export const giveTrainingId = state => state.training.trainingId;

export const getResult = state => state.training.pagesReadResult;

export const pagesPerDay = state => state.training.avgReadPages;

export const dataSchedule = state => getResult(state);

export const getBooksForCheckList = state => state.training.books;
export const getTrainingId = state => state.training.trainingId;

export const getTimeStart = state => state.training.timeStart;
export const getTimeEnd = state => state.training.timeEnd;

export const getNeedToRead = state => {
  let total = 0;
  state.training.books.forEach(book => {
    if (!book.isRead) {
      total += 1;
    }
  });
  return total;
};
