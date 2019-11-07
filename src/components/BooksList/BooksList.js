import React from 'react';
import PropTypes from 'prop-types';
import ReadBooks from './ReadBooks/ReadBooks';
import NowReadBooks from './NowReadBooks/NowReadBooks';
import PlanRadeBooks from './PlanReadBooks/PlanReadBooks';
import NextStepButton from './NextStepButton/NextStepButton';
import StartHelper from './StartHelper/StartHelper';
import SummaryModal from '../SummaryModal/SummaryModalContainer';
import Backdrop from '../Backdrop/BackdropConteiner';
import css from './BooksList.module.css';

const BookList = ({
  summaryModalOpen,
  readBooks,
  nowReadBooks,
  planeReadBooks,
  isUserHaveTraining,
}) => {
  return (
    <div className={css.bookList}>
      {readBooks.length > 0 && <ReadBooks listBooks={readBooks} />}

      {nowReadBooks.length > 0 && <NowReadBooks listBooks={nowReadBooks} />}

      {planeReadBooks.length > 0 && (
        <PlanRadeBooks listBooks={planeReadBooks} />
      )}

      <Backdrop isOpen={summaryModalOpen}>
        {({ onClose }) => <SummaryModal onClose={onClose} />}
      </Backdrop>

      {planeReadBooks.length > 0 && !isUserHaveTraining && <NextStepButton />}

      {readBooks.length === 0 &&
        nowReadBooks.length === 0 &&
        planeReadBooks.length === 0 && <StartHelper />}
    </div>
  );
};
BookList.propTypes = {
  summaryModalOpen: PropTypes.bool.isRequired,
  readBooks: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  nowReadBooks: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  planeReadBooks: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  isUserHaveTraining: PropTypes.bool.isRequired,
};

export default BookList;
