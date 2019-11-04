import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Goal.module.css';
import {
  getBooksForCheckList,
  getTimeStart,
  getTimeEnd,
  getNeedToRead,
} from '../../redux/training/trainingSelectors';

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
              <div className={styles.boxCounterNumber}>{DayNeeds}</div>
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

Goal.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({ isRead: PropTypes.bool.isRequired }),
  ).isRequired,
  timeStart: PropTypes.number.isRequired,
  timeEnd: PropTypes.string.isRequired,
  NeedToRead: PropTypes.number.isRequired,
};

const mapStateToProps = store => ({
  books: getBooksForCheckList(store),
  timeStart: getTimeStart(store),
  timeEnd: getTimeEnd(store),
  NeedToRead: getNeedToRead(store),
});

export default connect(mapStateToProps)(Goal);
