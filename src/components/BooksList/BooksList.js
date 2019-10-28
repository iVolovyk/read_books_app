import React from 'react';
import ReadBooks from './ReadBooks/ReadBooks';
import NowReadBooks from './NowReadBooks/NowReadBooks';
import PlanRadeBooks from './PlanRadeBooks/PlanRadeBooks';
import listBooks from '../../bookList.json';

const BookList = () => (
  <>
    <ReadBooks listBooks={listBooks.toRead} />
    <NowReadBooks listBooks={listBooks.nowRead} />
    <PlanRadeBooks listBooks={listBooks.finishRead} />
  </>
);
export default BookList;
