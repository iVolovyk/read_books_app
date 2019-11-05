/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ReadBooks from './ReadBooks/ReadBooks';
import NowReadBooks from './NowReadBooks/NowReadBooks';
import PlanRadeBooks from './PlanReadBooks/PlanReadBooks';
import NextStepButton from './NextStepButton/NextStepButton';
import StartHelper from './StartHelper/StartHelper';
import SummaryModal from '../SummaryModal/SummaryModalContainer';
import Backdrop from '../Backdrop/BackdropConteiner';
// import listBooks from './toDeletebookList';
import css from './BooksList.module.css';

const BookList = ({
  summaryModalOpen,
  readBooks,
  nowReadBooks,
  planeReadBooks,
}) => {
  return (
    <div className={css.bookList}>
      <ReadBooks listBooks={readBooks} />
      <NowReadBooks listBooks={nowReadBooks} />
      <PlanRadeBooks listBooks={planeReadBooks} />

      <Backdrop isOpen={summaryModalOpen}>
        {({ onClose }) => <SummaryModal onClose={onClose} />}
      </Backdrop>

      <NextStepButton />

      <StartHelper />
      {/* TODO */}
      {/* {listBooks.length === 0 && <StartHelper />} */}
    </div>
  );
};
BookList.propTypes = {
  summaryModalOpen: PropTypes.bool.isRequired,
};

export default BookList;
