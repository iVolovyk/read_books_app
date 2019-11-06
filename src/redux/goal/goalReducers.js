// eslint-disable-next-line
import { combineReducers } from 'redux';
// import { Type } from './goalActions';

// eslint-disable-next-line
// const BookNeedRead = (state = 0, { type, payload }) => {
const BookNeedRead = (state = 0, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

// const YouNeedDay = (state = 0, { type, payload }) => {
const YouNeedDay = (state = 0, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default combineReducers({
  BookNeedRead,
  YouNeedDay,
});
