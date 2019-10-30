import React from 'react';
import ReadBooks from './ReadBooks/ReadBooks';
import NowReadBooks from './NowReadBooks/NowReadBooks';
import PlanRadeBooks from './PlanReadBooks/PlanReadBooks';
import NextStepButton from './NextStepButton/NextStepButton';
import StartHelper from './StartHelper/StartHelper';

import listBooks from '../../bookList.json';
import css from './BooksList.module.css';

const BookList = () => (
  <div className={css.bookList}>
    <ReadBooks listBooks={listBooks.toRead} />
    <NowReadBooks listBooks={listBooks.nowRead} />
    <PlanRadeBooks listBooks={listBooks.finishRead} />

    <NextStepButton />
    <StartHelper />
    {/* TODO */}
    {/* {listBooks.length === 0 && <StartHelper />} */}
  </div>
);
export default BookList;
