import React from 'react';
import ReadBooks from './ReadBooks/ReadBooks';
import NowReadBooks from './NowReadBooks/NowReadBooks';
import PlanRadeBooks from './PlanReadBooks/PlanReadBooks';
import NextStepButton from './NextStepButton/NextStepButton';
import StartHelper from './StartHelper/StartHelper';
import SummaryModal from '../SummaryModal/SummaryModal';
import Backdrop from '../Backdrop/Backdrop';
import listBooks from './toDeletebookList';
import css from './BooksList.module.css';

const BookList = () => (
  <div className={css.bookList}>
    <ReadBooks listBooks={listBooks.toRead} />
    <NowReadBooks listBooks={listBooks.nowRead} />
    <PlanRadeBooks listBooks={listBooks.finishRead} />

    <Backdrop isOpen>{({ onClose }) => <SummaryModal />}</Backdrop>

    <NextStepButton />

    <StartHelper />
    {/* TODO */}
    {/* {listBooks.length === 0 && <StartHelper />} */}
  </div>
);
export default BookList;
