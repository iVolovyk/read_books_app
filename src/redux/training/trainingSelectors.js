export const giveTrainingId = state => state.training.trainingId;

export const getResult = state => state.training.pagesReadResult;

export const pagesPerDay = state => state.training.avgReadPages;

export const dataSchedule = state => getResult(state);
