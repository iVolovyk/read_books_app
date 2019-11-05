import moment from 'moment';

export const giveTrainingId = state => state.training.trainingId;

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
