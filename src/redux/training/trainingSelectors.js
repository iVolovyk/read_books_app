import moment from 'moment';

export const giveTrainingId = state => state.training.trainingId;

export const totalPage = state => state.training.allPagesCount;

export const getResult = state => state.training.pagesReadResult;

export const pagesPerDay = state => state.training.avgReadPages;

export const sortResult = state =>
  [...getResult(state)].sort((a, b) => {
    return moment(a.date).format('x') - moment(b.date).format('x');
  });

export const dataSchedule = state =>
  sortResult(state).map(i => {
    return { date: moment(i.date).format('DD.MM'), pages: i.count };
  });

export const totalReadPage = state =>
  getResult(state).reduce((acum, item) => {
    return acum + item.count;
  }, 0);
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

export const getReadPages = state => {
  let total = 0;
  state.training.pagesReadResult.forEach(book => {
    total += book.count;
  });

  return total;
};

export const getReadPagesCheked = state => {
  let total = 0;
  state.training.books.forEach(book => {
    if (book.isRead) {
      total += book.book.pagesCount;
    }
  });
  return total;
};
