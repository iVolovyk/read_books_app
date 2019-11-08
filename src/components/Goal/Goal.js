import React from 'react';
import moment from 'moment';

import PropTypes from 'prop-types';
import styles from './Goal.module.css';

const Goal = ({ books, timeStart, timeEnd, NeedToRead }) => {
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
              <div className={styles.boxCounterNumber}>{DayNeeds - 1}</div>
              <p className={styles.boxCounterText}>Кількість днів</p>
            </li>
            <li className={styles.boxCounterItem}>
              <div
                className={`${styles.boxCounterNumber} ${styles.boxCounterNumberOrange}`}
              >
                {NeedToRead}
              </div>
              <p className={styles.boxCounterText}>Залишилось книжок</p>
            </li>
          </ul>
        </section>
      )}
    </>
  );
};

Goal.defaultProps = {
  timeStart: 0,
  timeEnd: '',
};

Goal.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({ isRead: PropTypes.bool.isRequired }),
  ).isRequired,
  timeStart: PropTypes.number,
  timeEnd: PropTypes.string,
  NeedToRead: PropTypes.number.isRequired,
};

export default Goal;
