import React from 'react';
import ReadBooks from './ReadBooks/ReadBooks';
import NowReadBooks from './NowReadBooks/NowReadBooks';
import PlanRadeBooks from './PlanReadBooks/PlanReadBooks';
import listBooks from '../../bookList.json';
import css from './BooksList.module.css';

const BookList = () => (
  <div className={css.bookList}>
    <ReadBooks listBooks={listBooks.toRead} />
    <NowReadBooks listBooks={listBooks.nowRead} />
    <PlanRadeBooks listBooks={listBooks.finishRead} />
  </div>
);
export default BookList;
