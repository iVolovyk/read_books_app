import React from 'react';
import PropTypes from 'prop-types';
import ReadBooks from './ReadBooks/ReadBooks';
import NowReadBooks from './NowReadBooks/NowReadBooks';
import PlanRadeBooks from './PlanReadBooks/PlanReadBooks';
import NextStepButton from './NextStepButton/NextStepButton';
import StartHelper from './StartHelper/StartHelper';
import SummaryModal from '../SummaryModal/SummaryModalContainer';
import Backdrop from '../Backdrop/Backdrop';
import listBooks from './toDeletebookList';
import css from './BooksList.module.css';

const BookList = ({ summaryModalOpen }) => (
  <div className={css.bookList}>
    <ReadBooks listBooks={listBooks.toRead} />
    <NowReadBooks listBooks={listBooks.nowRead} />
    <PlanRadeBooks listBooks={listBooks.finishRead} />

    <Backdrop isOpen={summaryModalOpen}>
      {({ onClose }) => <SummaryModal onClose={onClose} />}
    </Backdrop>

    <NextStepButton />

    <StartHelper />
    {/* TODO */}
    {/* {listBooks.length === 0 && <StartHelper />} */}
  </div>
);
BookList.propTypes = {
  summaryModalOpen: PropTypes.bool.isRequired,
};

export default BookList;
