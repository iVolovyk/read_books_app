import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from './GoalToo.module.css';

const GoalToo = ({ books, timeStart, timeEnd }) => {
  const timeStartFormat = moment(timeStart).format('x');
  const timeEndFormat = moment(timeEnd).format('x');
  const timeForTrening = timeEndFormat - timeStartFormat;
  const DayNeeds = moment(timeForTrening).format('DD');
  return (
    <>
      {DayNeeds > 0 && (
        <section className={styles.box}>
          <div className={styles.boxTitle}>Моя мета прочитати</div>
          <ul className={styles.boxCounter}>
            <li className={styles.boxCounterItem}>
              <div className={styles.boxCounterNumber}>{books.length}</div>
              <p className={styles.boxCounterText}>Кількість книжок</p>
            </li>
            <li className={styles.boxCounterItem}>
              <div className={styles.boxCounterNumber}>{DayNeeds}</div>
              <p className={styles.boxCounterText}>Кількість днів</p>
            </li>
          </ul>
        </section>
      )}
    </>
  );
};

GoalToo.defaultProps = {
  timeStart: 0,
  timeEnd: '',
};
GoalToo.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({ isRead: PropTypes.bool.isRequired }),
  ).isRequired,
  timeStart: PropTypes.number,
  timeEnd: PropTypes.string,
};

export default GoalToo;
